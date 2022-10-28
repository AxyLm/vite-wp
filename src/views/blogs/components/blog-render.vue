<template>
  <div class="blog-body py-6">
    <div v-html="content"></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'BlogContent',
    props: {
      content: {
        default: '',
      },
    },
  });
</script>

<style lang="less">
  .blog-body {
    h1 {
      @apply text-4xl font-bold;
    }
    h2 {
      @apply text-3xl font-bold;
    }
    h3 {
      @apply text-2xl font-bold;
    }
    pre {
      overflow: auto;

      @apply mb-4 mt-8 rounded-md bg-base-12 p-4 text-base-3;
      code {
      }
    }
    p {
      @apply mb-8;
    }
    hr {
      @apply my-7;
    }
    a {
      @apply link;
    }
  }
</style>
