import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["src/tests/setup.js"],
    testMatch: ["./tests/**/*.test.js", "./tests/**/*.spec.js"],
    globals: true,
  },
});
