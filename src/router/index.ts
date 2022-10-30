import { RouteRecordRaw } from 'vue-router';
import Layout from '~/layout/index.vue';

import pageRoutes from '~pages';
const routes: RouteRecordRaw[] = [
  {
    name: 'Layout',
    path: '/',
    component: Layout,
    // redirect:"/mom"
    children: [
      // {
      //   name: 'Blog',
      //   path: '/',
      //   component: Blogs,
      // },

      ...pageRoutes,
    ],
  },
];

export { routes };
