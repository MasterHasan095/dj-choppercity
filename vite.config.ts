import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Default: Vercel/normal hosting => "/"
// For GitHub Pages => set VITE_BASE="/<repo-name>/"
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "/",
});
