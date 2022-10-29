// import { createApp } from 'vue';
import App from './app.vue';
import 'tailwindcss/tailwind.css';
import '~/style/nprogress.less';
import './style/index.less';
import { ViteSSG } from 'vite-ssg';
import { routes } from './router';
import NProgress from 'nprogress';

export const createApp = ViteSSG(App, { routes }, ({ router, isClient }) => {
  if (isClient) {
    router.beforeEach(() => {
      NProgress.start();
    });
    router.afterEach(() => {
      NProgress.done();
    });
  }
});
