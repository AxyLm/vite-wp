<template>
  <Header></Header>
  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
</template>
<script lang="ts">
  import Header from './header.vue';
  export default {
    name: 'Layout',
    components: {
      // eslint-disable-next-line vue/no-reserved-component-names
      Header,
    },
  };
</script>
<style lang="less" scoped>
  html[data-theme='dark'] {
    #app {
      background-image: url(~/assets/bg-stars.svg);
    }
  }
</style>
