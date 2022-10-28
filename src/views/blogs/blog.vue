<script lang="ts">
  import { Head, useHead } from '@vueuse/head';
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  import { getBlogById } from '~/utils/request';
  import { Blog } from './type';
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
      const post = ref<Blog>();
      const { postId } = route.params;
      getBlogById(postId as string).then((res) => {
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
      const post = await getBlogById(postId as string);

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
