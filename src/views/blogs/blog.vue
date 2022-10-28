<script lang="ts">
  import { Head, useHead } from '@vueuse/head';
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { getPostById } from '~/utils/request';
  import BlogRender from './components/blog-render.vue';
  export default {
    name: 'Blog',
    components: {
      BlogRender,
      // eslint-disable-next-line vue/no-reserved-component-names
      Head,
    },
    setup() {
      const route = useRoute();
      const post = ref();
      const { postId } = route.params;
      getPostById(postId as string).then((res) => {
        post.value = res.data.post;
      });

      useHead({
        title: () => post?.value?.title ?? '-',
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
    <Head>
      <title>{{ post?.title }}</title>
    </Head>
    <div class="post m-auto px-7 py-10">
      <h1 class="text-5xl font-bold">{{ post?.title }}</h1>
      <blog-render :content="post?.content" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .post {
    max-width: 75ch;
    font-size: 1rem;
    line-height: 1.75;
  }
</style>
