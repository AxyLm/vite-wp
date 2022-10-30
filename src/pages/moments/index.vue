<template>
  <Head>
    <title>Moment</title>
  </Head>
  <div class="w-full pb-20">
    <!-- <h2 class="title">Moment</h2> -->

    <section
      class="suzhou mx-auto"
      style="width: 60vw; height: 40vw; max-width: 95%; font-size: 1rem; line-height: 1.75"
    >
      <ul class="grid h-full w-full grid-cols-6 grid-rows-4 gap-1">
        <li class="col-span-6 row-span-2">
          <img
            src="../../assets/images/moments/2022-10-suzhou/3.jpeg"
            alt=""
            class="h-full w-full object-cover"
          />
        </li>
        <li class="col-span-2 row-span-2">
          <img
            src="../../assets/images/moments/2022-10-suzhou/2.jpeg"
            alt=""
            class="h-full w-full object-cover"
          />
        </li>
        <li class="col-span-2 row-span-2">
          <img
            src="../../assets/images/moments/2022-10-suzhou/1.jpeg"
            alt=""
            class="h-full w-full object-cover"
          />
        </li>
        <li class="col-span-2 row-span-2">
          <img
            src="../../assets/images/moments/2022-10-suzhou/5.jpeg"
            alt=""
            class="h-full w-full object-cover"
          />
        </li>
      </ul>
    </section>

    <section
      class="suzhou mx-auto"
      style="width: 60vw; height: 40vw; max-width: 95%; font-size: 1rem; line-height: 1.75"
    >
      <ul class="mt-1 grid h-full w-full grid-cols-6 grid-rows-4 gap-1">
        <li class="col-span-4 row-span-4">
          <img
            src="../../assets/images/moments/2022-10-suzhou/4.JPG"
            alt=""
            class="h-full w-full object-cover"
          />
        </li>
        <li class="col-span-2 row-span-1">
          <img
            src="../../assets/images/moments/2022-10-suzhou/6.jpeg"
            alt=""
            class="h-full w-full object-cover"
          />
        </li>
        <li class="col-span-2 row-span-1">
          <img
            src="../../assets/images/moments/2022-10-suzhou/7.png"
            alt=""
            class="h-full w-full object-cover"
          />
        </li>
        <li class="col-span-2 row-span-2">
          <img
            src="../../assets/images/moments/2022-10-suzhou/1.jpeg"
            alt=""
            class="h-full w-full object-cover"
          />
        </li>
      </ul>
    </section>

    <!-- <div v-for="item in list" :key="item.id">
      <ul class="moment-ul">
        <li v-for="media in item.medias" :key="media.url">
          <div class="img-card">
            <img :src="media.url" alt="" class="h-full w-full object-cover" />
          </div>
        </li>
      </ul>
      <p>
        <span> <icon-ion:location-outline /> {{ item.location }}</span>
        <span>{{ item.date }}</span>
      </p>
    </div> -->
  </div>
</template>
<script lang="ts">
  export default {
    name: 'Moment',
  };
</script>
<script lang="ts" setup>
  const importImg = (url: string) => new URL(`../..${url}`, import.meta.url).href;

  const list = [
    {
      id: 1,
      date: '2022 10',
      location: '苏州',
      city: '苏州',
      medias: [
        {
          url: importImg('/assets/images/moments/2022-10-suzhou/1.jpeg'),
        },
        {
          url: importImg('/assets/images/moments/2022-10-suzhou/2.jpeg'),
        },
        {
          url: importImg('/assets/images/moments/2022-10-suzhou/3.jpeg'),
        },
        {
          url: importImg('/assets/images/moments/2022-10-suzhou/2.jpeg'),
        },
        {
          url: importImg('/assets/images/moments/2022-10-suzhou/3.jpeg'),
        },
      ],
    },
  ];
</script>

<style lang="less" scoped>
  .moments {
    width: 80vw;
    max-width: 90%;
    font-size: 1rem;
    line-height: 1.75;

    .title {
      text-indent: 0.125rem;
    }
    .moment-ul {
      overflow-wrap: break-word;
      @apply flex flex-wrap;
      li {
        width: 20%;
        height: 0;
        padding-bottom: 20%;
        position: relative;
        .img-card {
          cursor: zoom-in;
          padding: 2px;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      }
      @media (max-width: 640px) {
        li {
          width: 33.3333%;
          padding-bottom: 33.3333%;
        }
      }
    }
  }
</style>
