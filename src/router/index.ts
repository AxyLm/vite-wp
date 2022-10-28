import { RouteRecordRaw } from 'vue-router';

import Post from '~/views/blogs/blog.vue';
import PostList from '~/views/blogs/index.vue';
import Layout from '~/layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    name: 'Layout',
    path: '/',
    component: Layout,
    children: [
      {
        name: 'Posts',
        path: '/',
        component: PostList,
      },
      {
        name: 'Post',
        path: '/posts/:postId',
        component: Post,
      },
    ],
  },
];

export { routes };
