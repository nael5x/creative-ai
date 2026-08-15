import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/creative-ai/" : "/",
  plugins: [react()],
  test: { environment: "jsdom", setupFiles: "./src/test/setup.ts" },
});
