import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { type Server } from "http";

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  try {
    // Dynamic imports to avoid loading in production
    const { createServer: createViteServer, createLogger } = await import(
      "vite"
    );
    const viteConfig = await import("../vite.config.js");
    let nanoid: (() => string) | null = null;
    try {
      const nanoidModule = await import("nanoid");
      nanoid = nanoidModule.nanoid;
    } catch {
      // nanoid not available, use Date.now() as fallback
      nanoid = () => Date.now().toString();
    }

    const viteLogger = createLogger();

    const serverOptions = {
      middlewareMode: true,
      hmr: { server },
      allowedHosts: true as const,
    };

    const vite = await createViteServer({
      ...viteConfig.default,
      configFile: false,
      customLogger: {
        ...viteLogger,
        error: (msg, options) => {
          viteLogger.error(msg, options);
          process.exit(1);
        },
      },
      server: serverOptions,
      appType: "custom",
    });

    app.use(vite.middlewares);
    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;

      try {
        // Use process.cwd() as fallback if import.meta.dirname is not available
        // import.meta.dirname is available in Node.js 20.11+
        let baseDir = process.cwd();
        try {
          if (
            "dirname" in import.meta &&
            typeof (import.meta as any).dirname === "string"
          ) {
            baseDir = (import.meta as any).dirname;
          }
        } catch {
          // Fallback to process.cwd() if import.meta.dirname is not available
        }

        const clientTemplate = path.resolve(
          baseDir,
          "..",
          "client",
          "index.html"
        );

        // always reload the index.html file from disk incase it changes
        let template = await fs.promises.readFile(clientTemplate, "utf-8");
        if (nanoid) {
          template = template.replace(
            `src="/src/main.tsx"`,
            `src="/src/main.tsx?v=${nanoid()}"`
          );
        }
        const page = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(page);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } catch (error) {
    log(`Failed to setup Vite: ${error}`);
    throw error;
  }
}

export function serveStatic(app: Express) {
  try {
    // Try multiple possible locations for static files
    // 1. dist/public (local build)
    // 2. Relative to process.cwd() (Vercel might use this)
    // 3. __dirname equivalent in ESM

    // Use process.cwd() as fallback if import.meta.dirname is not available
    // import.meta.dirname is available in Node.js 20.11+
    let baseDir = process.cwd();
    try {
      if (
        "dirname" in import.meta &&
        typeof (import.meta as any).dirname === "string"
      ) {
        baseDir = (import.meta as any).dirname;
      }
    } catch {
      // Fallback to process.cwd() if import.meta.dirname is not available
    }

    const possiblePaths = [
      path.resolve(process.cwd(), "dist", "public"),
      path.resolve(process.cwd(), "public"),
      path.resolve(baseDir, "..", "dist", "public"),
      path.resolve(baseDir, "public"),
    ];

    let distPath: string | null = null;

    for (const testPath of possiblePaths) {
      try {
        if (
          fs.existsSync(testPath) &&
          fs.existsSync(path.join(testPath, "index.html"))
        ) {
          distPath = testPath;
          break;
        }
      } catch {
        // Continue to next path if this one fails
        continue;
      }
    }

    if (!distPath) {
      // In Vercel or if files don't exist, log warning but don't crash
      // This allows the app to still work for API routes
      log(
        `Warning: Could not find the build directory. Tried: ${possiblePaths.join(
          ", "
        )}`
      );
      // Don't set up catch-all here - let the main app handle it
      return;
    }

    log(`Serving static files from: ${distPath}`);
    app.use(express.static(distPath));

    // SPA fallback: serve index.html for all non-API routes that don't match files
    app.use("*", (req, res, next) => {
      // Skip API routes and health check
      if (req.path.startsWith("/api") || req.path === "/health") {
        return next();
      }

      // Serve index.html for client-side routing
      const indexPath = path.resolve(distPath!, "index.html");
      try {
        if (fs.existsSync(indexPath)) {
          res.sendFile(indexPath);
        } else {
          next();
        }
      } catch (err) {
        log(`Error serving index.html: ${err}`);
        next();
      }
    });
  } catch (error) {
    log(`Error in serveStatic: ${error}`);
    // Don't throw - just log the error and let the app continue
  }
}
