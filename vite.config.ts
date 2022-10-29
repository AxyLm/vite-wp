import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import Pages from 'vite-plugin-pages';
import Markdown from 'vite-plugin-vue-markdown';

// https://vitejs.dev/config/
export default {
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, './src')}/`,
    },
  },
  envDir: 'config/',
  server: {
    host: '0.0.0.0',
    port: 8303,
    watch: {
      ignored: ['./config/*'],
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    manifest: true,
    chunkSizeWarningLimit: 533,
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', '@vueuse/core'],
  },

  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    Pages({
      extensions: ['vue', 'md'],
      pagesDir: 'src/pages',
    }),
    Markdown({
      // wrapperComponent: 'post',
      headEnabled: true,
    }),
    Icons({
      scale: 1,
      defaultStyle: 'display:inline', // Style apply to icons
      defaultClass: 'icon', // Class names apply to icons
      autoInstall: true,
      compiler: 'vue3',
      customCollections: {
        logo: FileSystemIconLoader('./public/', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" '),
        ),
      },
    }),
    Components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        IconsResolver({
          prefix: 'icon',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
  ],
  ssgOptions: {
    formatting: 'minify',
    format: 'cjs',
  },
};
