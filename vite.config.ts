import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Only load Replit-specific plugins in Replit environment
const isReplit = process.env.REPL_ID !== undefined;

export default defineConfig(async () => {
  const plugins = [react()];

  if (isReplit) {
    // Load Replit-only plugins dynamically so they don't break Vercel build
    const [themePlugin, runtimeErrorOverlay] = await Promise.all([
      import("@replit/vite-plugin-shadcn-theme-json").then((m) => m.default()),
      import("@replit/vite-plugin-runtime-error-modal").then((m) => m.default()),
    ]);
    plugins.push(themePlugin, runtimeErrorOverlay);

    if (process.env.NODE_ENV !== "production") {
      const cartographer = await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      );
      plugins.push(cartographer);
    }
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "shared"),
        "@assets": path.resolve(import.meta.dirname, "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "client"),
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
  };
});
