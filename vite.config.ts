import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// CHANGE THIS to your repo name:
const repoName = "dj-choppercity";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});
