import {defineConfig} from "vite";
import Legacy from "@vitejs/plugin-legacy";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [
    Legacy({
      targets: ["defaults", "IE >= 8", "Chrome >= 49"],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {},
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
