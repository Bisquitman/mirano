import {defineConfig} from "vite";
import Legacy from "@vitejs/plugin-legacy";
import autoprefixer from "autoprefixer";
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 85,
      },
      jpeg: {
        quality: 85,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
      avif: {
        quality: 60,
      },
    }),
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
