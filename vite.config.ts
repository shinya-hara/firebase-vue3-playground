/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';
import pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), pages()],

  // https://vitejs.dev/config/#server-port
  server: {
    port: 3000,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/styles.scss";`,
      },
    },
  },
});
