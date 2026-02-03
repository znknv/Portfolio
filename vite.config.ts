import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  server: {
    port: 3000,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
    open: '/Portfolio/'
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
