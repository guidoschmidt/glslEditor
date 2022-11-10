// vite.config.js
import { defineConfig } from "vite";
import electron from "vite-plugin-electron";
import path from "path";

export default defineConfig({
  plugins: [electron({ entry: path.join(__dirname, "../src/electron.js") })],
});
