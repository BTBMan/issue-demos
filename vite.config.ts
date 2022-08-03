import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from '@vitejs/plugin-vue';
import qiankun from 'vite-plugin-qiankun';
import AutoImport from 'unplugin-auto-import/vite';

const { name } = require(`./package.json`);

export default defineConfig({
  plugins: [
    vueJsx({ optimize: true, transformOn: true }),
    vue(),
    AutoImport({
      imports: ['vue'],
      dts: './src/auto-imports.d.ts',
    }),
    qiankun(`${name}`, {
      useDevMode: true,
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      // 'element-plus/dist/index.css'
      external: ['vue', 'element-plus/dist/index.css', 'element-plus'],
      output: {
        format: 'umd',
        inlineDynamicImports: true,
        globals: {
          vue: 'Vue',
          // 'element-plus/dist/index.css': '" "',
          'element-plus': 'lskd',
          'element-plus/dist/index.css': 'sdj',
        },
      },
    },
  },
});
