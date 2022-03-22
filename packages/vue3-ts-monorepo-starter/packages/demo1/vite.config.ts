import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: '../../dist/demo1',
  },
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}/`,
    },
  },
  plugins: [
    vue(),
    Icons({
      compiler: 'vue3',
      customCollections: {
        app: FileSystemIconLoader('../shared/svg-icons'),
      },
    }),
  ],
  server: {
    proxy: {
      '/courses': {
        target: 'https://api.test.osinfra.cn/metadata/v1/metadata/infrastructure/playground-meta/',
        changeOrigin: true,
      },
    },
  },
});
