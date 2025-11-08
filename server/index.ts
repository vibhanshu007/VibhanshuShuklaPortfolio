import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { createServer, type Server } from "http";

const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Basic health check route (before initialization)
app.get("/health", (_req, res) => {
  res.json({ 
    status: "ok", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "unknown",
    vercel: process.env.VERCEL === "1" ? true : false
  });
});

// Check if we're in a serverless environment (Vercel)
const isVercel = process.env.VERCEL === "1" || process.env.VERCEL_ENV !== undefined;
const isDevelopment = process.env.NODE_ENV === "development" && !isVercel;

// Initialize the app
let isInitialized = false;
let initPromise: Promise<void> | null = null;
let httpServer: Server | null = null;

async function initializeApp() {
  if (isInitialized) return;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    try {
      httpServer = await registerRoutes(app);

      // Importantly only setup vite in development and after
      // setting up all the other routes so the catch-all route
      // doesn't interfere with the other routes
      if (isDevelopment) {
        try {
          await setupVite(app, httpServer);
        } catch (error) {
          log(`Error setting up Vite: ${error}`);
          // Continue even if Vite setup fails
        }
      } else {
        try {
          serveStatic(app);
        } catch (error) {
          log(`Error serving static files: ${error}`);
          // Add fallback route if static serving fails
          app.use("*", (_req, res) => {
            res.status(404).json({ 
              message: "Static files not available",
              error: error instanceof Error ? error.message : String(error)
            });
          });
        }
      }

      // Error handler middleware - must be after all routes
      app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
        const status = err.status || err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        
        log(`Error: ${status} - ${message}`);
        res.status(status).json({ message });
      });

      isInitialized = true;
      log("App initialized successfully");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      const errorStack = error instanceof Error ? error.stack : undefined;
      log(`Error during initialization: ${errorMessage}`);
      if (errorStack) {
        log(`Stack: ${errorStack}`);
      }
      
      // Add emergency error handler
      app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
        res.status(500).json({ 
          message: "Internal Server Error",
          error: errorMessage 
        });
      });
      
      throw error;
    }
  })();

  return initPromise;
}

// Middleware to ensure app is initialized before handling requests
// This is important for Vercel serverless functions where initialization happens on first request
app.use(async (req: Request, res: Response, next: NextFunction) => {
  try {
    await initializeApp();
    next();
  } catch (error) {
    next(error);
  }
});

// Only start the server if we're NOT in a serverless environment (local development/production)
if (!isVercel) {
  (async () => {
    await initializeApp();
    if (httpServer) {
      const port = parseInt(process.env.PORT || '5000', 10);
      httpServer.listen({
        port,
        host: "0.0.0.0",
        reusePort: true,
      }, () => {
        log(`serving on port ${port}`);
      });
    }
  })().catch((error) => {
    log(`Failed to start server: ${error}`);
    process.exit(1);
  });
}

// For Vercel serverless functions, export the app directly
// @vercel/node will handle the Express app automatically
export default app;
