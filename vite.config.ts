import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Custom domain corrlink.site (public/CNAME) → served from the root.
  // Without the domain, GitHub Pages serves under /corrlinkv1/ — switch base back
  // in the same commit as removing public/CNAME, or every asset 404s.
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
