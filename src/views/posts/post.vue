<script lang="ts">
  import { useHead } from '@vueuse/head';
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { getPostById } from '~/utils/request';

  export default {
    name: 'Post',
    setup() {
      const route = useRoute();
      const post = ref();
      const { postId } = route.params;
      getPostById(postId as string).then((res) => {
        post.value = res.data.post;
      });
      return {
        postId: route.params.postId,
        post: post,
      };
    },
    async serverPrefetch() {
      const route = useRoute();
      const { postId } = route.params;
      const post = await getPostById(postId as string);

      return {
        post,
      };
    },
  };
</script>

<template>
  <div>
    <div class="breadcrumbs text-sm">
      <ul>
        <li><RouterLink to="/" active-class="font-bold">> Post </RouterLink></li>
        <li
          ><RouterLink :to="`/posts/${postId}`" active-class="font-bold">
            {{ postId }}</RouterLink
          ></li
        >
      </ul>
    </div>
    <div class="hero pt-20">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 class="text-5xl font-bold">{{ post?.title }}</h1>
          <p class="py-6" v-html="post?.content"></p>
          <!-- <button class="btn btn-primary">Get Started</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
