import { RouteRecordRaw } from 'vue-router';

import Blog from '~/views/blogs/blog.vue';
import Blogs from '~/views/blogs/index.vue';
import Layout from '~/layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'Layout',
    path: '/',
    component: Layout,
    children: [
      {
        name: 'Blog',
        path: '/',
        component: Blogs,
      },
      {
        name: 'BlogDesc',
        path: '/blog/:postId',
        component: Blog,
      },
    ],
  },
];

export { routes };
