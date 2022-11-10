// vite.config.js
import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import { join } from "path";

export default defineConfig({
  plugins: [electron({ entry: join(__dirname, "../src/electron.js") })],
  build: {
    outDir: "./build/electron",
  },
});
