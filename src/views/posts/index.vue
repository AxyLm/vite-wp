<script lang="ts">
  import { ref } from 'vue';
  import { getAllPosts } from '~/utils/request';

  export default {
    name: 'Posts',
    setup() {
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
  <div class="breadcrumbs text-sm">
    <ul>
      <li><RouterLink to="/" active-class="font-bold">> Post </RouterLink></li>
    </ul>
  </div>
  <ul class="mt-4">
    <li v-for="item in posts" :key="item.node.postId" class="mb-6">
      <RouterLink :to="`/posts/${item.node.postId}`" class="link">
        <span class="text-2xl font-bold"></span>
        {{ item.node?.title }}
      </RouterLink>
      <br />

      <span class="text-sm" v-html="item.node.excerpt"></span>
      <!-- <span v-html="item.node?.date"></span> -->
    </li>
  </ul>
</template>

<style lang="less" scoped></style>
