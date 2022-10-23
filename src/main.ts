// import { createApp } from 'vue';
import App from './app.vue';
import 'tailwindcss/tailwind.css';
import './style/index.less';
import { ViteSSG } from 'vite-ssg';
import { routes as baseRoutes } from './router';
import { createPinia } from 'pinia';
import { RouteRecordRaw } from 'vue-router';
import { getAllPostIds } from '~/utils/request';
import NProgress from 'nprogress';
import '~/style/nprogress.less';

export async function includedRoutes(paths: string[], routes: RouteRecordRaw[]) {
  const postIds = await getAllPostIds().then((res) =>
    res.data.posts.edges.map((e) => e.node.postId),
  );

  return paths.concat(postIds.map((id) => `/posts/${id}`));
}

if (!import.meta.env.SSR) {
  NProgress.start();
}
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes: baseRoutes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState, onSSRAppRendered }) => {
    onSSRAppRendered(() => {
      if (!import.meta.env.SSR) {
        NProgress.done();
      }
    });
    const pinia = createPinia();
    app.use(pinia);

    router.beforeEach((to, from) => {
      if (to.path !== from.path) {
        if (!import.meta.env.SSR) {
          NProgress.start();
        }
      }
    });
    router.afterEach(() => {
      if (!import.meta.env.SSR) {
        NProgress.done();
      }
    });
  },
);
