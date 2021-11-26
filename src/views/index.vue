<template>
  <the-nav />

  <main>
    <swiper
      class="h-screen"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
    >
      <swiper-slide v-for="(banner, index) in banners" :key="index">
        <div
          class="w-full h-full overflow-hidden bg-no-repeat bg-cover bg-center"
          :class="banner"
        />
      </swiper-slide>
    </swiper>

    <section
      v-for="(item, index) in sections"
      :id="`${item.anchorPoint}`"
      :key="index"
      class="container min-h-screen pt-24 pb-6"
    >
      <h1>{{ item.text }}</h1>
      <component :is="item.component" />
    </section>
  </main>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Pagination]);
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

import TheNav from '@/components/Nav.vue';
import Docs from '@/views/Docs.vue';
import About from '@/views/About.vue';
import Links from '@/views/Links.vue';

const sections = [
  { text: '文档汇总', anchorPoint: 'docs', component: Docs },
  { text: '关于我', anchorPoint: 'about', component: About },
  { text: '友情链接', anchorPoint: 'links', component: Links }
];

const banners = [
  'bg-banner-1',
  'bg-banner-2',
  'bg-banner-3',
  'bg-banner-4',
  'bg-banner-5'
];
</script>
