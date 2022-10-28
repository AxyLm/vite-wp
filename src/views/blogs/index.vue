<script lang="ts">
  import { useHead } from '@vueuse/head';
  import { ref } from 'vue';
  import { getAllPosts } from '~/utils/request';

  export default {
    name: 'Blog',
    setup() {
      useHead({
        title: 'Blog',
      });
      const posts = ref<any[]>([]);
      getAllPosts().then((res) => {
        posts.value = res.data.posts.edges;
      });
      return {
        posts: posts,
      };
    },
    async serverPrefetch() {
      const post = await getAllPosts().then((res) => res.data.posts.edges);
      this.posts = post;
      return {
        post,
      };
    },
  };
</script>

<template>
  <div class="posts m-auto px-7 py-10">
    <ul>
      <li v-for="item in posts" :key="item.node.postId" class="post-item mb-6">
        <RouterLink
          :to="`/posts/${item.node.postId}`"
          class="text-base-8 transition-colors hover:text-base-13 dark:text-base-6 dark:hover:text-base-1"
        >
          <span class="text-md font-bold">
            {{ item.node?.title }}
          </span>
          <p class="text-sm">{{ item.node.date }}</p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
  .posts {
    max-width: 45ch;
    font-size: 1rem;
    line-height: 1.75;
    .post-item {
    }
  }
</style>
