import { RouteRecordRaw } from 'vue-router';
import Post from '~/views/posts/post.vue';
import PostList from '~/views/posts/index.vue';

const routes: RouteRecordRaw[] = [
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
];

export { routes };
