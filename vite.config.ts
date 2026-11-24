import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages without a custom domain: https://norin-web.github.io/corrlinkv1/
  // When a custom domain is attached in Pages settings, switch to base: "/"
  // and add public/CNAME in the same commit. If the domain is removed,
  // switch back to "/corrlinkv1/" or every asset 404s.
  base: "/corrlinkv1/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
