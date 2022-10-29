// import { createApp } from 'vue';
import App from './app.vue';
import 'tailwindcss/tailwind.css';
import './style/index.less';
import { ViteSSG } from 'vite-ssg';
import { routes as baseRoutes } from './router';
import { createPinia } from 'pinia';
import { RouteRecordRaw } from 'vue-router';
import { getAllBlogIds } from '~/utils/request';
import NProgress from 'nprogress';
import '~/style/nprogress.less';

export async function includedRoutes(paths: string[], routes: RouteRecordRaw[]) {
  const postIds = await getAllBlogIds().then((res) =>
    res.data.posts.edges.map((e) => e.node.postId),
  );

  return paths.concat(postIds.map((id) => `/blog/${id}`));
}

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes: baseRoutes },
  // function to have custom setups
  ({ app, router, routes, isClient }) => {
    const pinia = createPinia();
    app.use(pinia);

    if (isClient) {
      router.beforeEach(() => NProgress.start());
      router.afterEach(() => NProgress.done());
    }
  },
);
