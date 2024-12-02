import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), themePlugin(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      db: path.resolve(__dirname, "db"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
