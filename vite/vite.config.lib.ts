// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  build: {
    target: "esnext",
    lib: {
      entry: resolve(__dirname, "../src/js/GlslEditor.js"),
      name: "glslEditor",
      fileName: "glslEditor.js",
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") return "glslEditor.css";
          return assetInfo.name;
        },
      },
    },
  },
});
