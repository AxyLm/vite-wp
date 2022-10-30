// import { createApp } from 'vue';
import App from './app.vue';
import 'tailwindcss/tailwind.css';
import '~/style/nprogress.less';
import './style/index.less';
import { ViteSSG } from 'vite-ssg';
import { routes } from './router';
import NProgress from 'nprogress';
import { Head } from '@vueuse/head';

export const createApp = ViteSSG(App, { routes }, ({ app, router, isClient }) => {
  if (isClient) {
    // eslint-disable-next-line vue/no-reserved-component-names
    app.component('Head', Head);
    router.beforeEach(() => {
      NProgress.start();
    });
    router.afterEach(() => {
      NProgress.done();
    });
  }
});
