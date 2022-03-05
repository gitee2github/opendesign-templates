import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  root: './packages',
  build: {
    rollupOptions: {
      input: {
        demo: './packages/demo/index.html',
      },
    },
    outDir: '../dist',
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './packages')}/`,
      '@demo/': `${path.resolve(__dirname, './packages/demo/src')}/`,
    },
  },
  plugins: [vue()],
  server: {
    proxy: {
      '/courses': {
        target: 'https://api.test.osinfra.cn/metadata/v1/metadata/infrastructure/playground-meta/',
        changeOrigin: true,
      },
    },
  },
});
