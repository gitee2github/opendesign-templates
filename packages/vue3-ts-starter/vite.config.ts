import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/templates/',
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}/`,
    },
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve('./src/assets/svg-icons')],
      symbolId: 'icon-[dir]-[name]',
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
