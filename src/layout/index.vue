<template>
  <Header></Header>
  <main>
    <router-view></router-view>
  </main>
</template>
<script lang="ts" setup>
  import Header from './header.vue';
</script>
<style lang="less" scoped>
  html[data-theme='dark'] {
    #app {
      background-image: url(~/assets/bg-stars.svg);
    }
  }
</style>
