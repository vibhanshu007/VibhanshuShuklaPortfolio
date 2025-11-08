import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
import { registerRoutes } from "./routes";

const app = express();

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

function log(message: string) {
  console.log(`[express] ${message}`);
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Health check route
app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "unknown",
    vercel: !!process.env.VERCEL,
  });
});

const isVercel = !!process.env.VERCEL || !!process.env.VERCEL_ENV;
const isDevelopment = process.env.NODE_ENV === "development" && !isVercel;

// Use ReturnType<typeof createServer> so TypeScript correctly infers the
// Node http.Server instance and its methods (like `listen`). Importing
// the `Server` type directly can sometimes cause narrow/union issues
// depending on the environment, so this is a robust alternative.
let httpServer: ReturnType<typeof createServer> | null = null;
let initPromise: Promise<void> | null = null;

async function initialize() {
  if (initPromise) return initPromise;

  initPromise = (async () => {
    try {
      log("Initializing...");
      httpServer = await registerRoutes(app);

      if (isDevelopment) {
        try {
          const { setupVite } = await import("./vite");
          if (httpServer) {
            await setupVite(app, httpServer);
          }
        } catch (err) {
          log(`Vite setup failed: ${err}`);
        }
      } else {
        try {
          const { serveStatic } = await import("./vite");
          serveStatic(app);
        } catch (err) {
          log(`Static serving failed: ${err}`);
          // Fallback: return 404 for non-API routes if static serving failed
          app.use("*", (req, res, next) => {
            if (req.path.startsWith("/api") || req.path === "/health") {
              return next();
            }
            res.status(404).json({
              message: "Not found",
              path: req.path,
            });
          });
        }
      }

      log("Initialization complete");
    } catch (err) {
      log(`Initialization error: ${err}`);
      throw err;
    }
  })();

  return initPromise;
}

// Middleware to ensure initialization
app.use(async (_req: Request, _res: Response, next: NextFunction) => {
  try {
    await initialize();
    next();
  } catch (err) {
    next(err);
  }
});

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  log(`Error ${status}: ${message}`);
  res.status(status).json({ message });
});

// Start server for local development
if (!isVercel) {
  initialize()
    .then(() => {
      if (httpServer) {
        const port = parseInt(process.env.PORT || "5000", 10);
        httpServer.listen(port, () => {
          log(`Server listening on port ${port}`);
        });
      }
    })
    .catch((err) => {
      log(`Failed to start: ${err}`);
      process.exit(1);
    });
}

export default app;
