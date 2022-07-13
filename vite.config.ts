import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    vueJsx({ optimize: true, transformOn: true }),
    vue(),
    AutoImport({
      imports: ['vue'],
      dts: './src/auto-imports.d.ts',
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      external: ['vue'],
      output: {
        format: 'umd',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
