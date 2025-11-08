import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

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
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
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
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
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
    if (
      fs.existsSync(testPath) &&
      fs.existsSync(path.join(testPath, "index.html"))
    ) {
      distPath = testPath;
      break;
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
    app.use("*", (_req, res) => {
      res.status(404).json({
        message: "Static files not found. Please build the client first.",
        triedPaths: possiblePaths,
      });
    });
    return;
  }

  log(`Serving static files from: ${distPath}`);
  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    const indexPath = path.resolve(distPath!, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).json({ message: "index.html not found" });
    }
  });
}
