<template>
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
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
SwiperCore.use([Autoplay, Pagination]);
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const banners = [
  'bg-banner-1',
  'bg-banner-2',
  'bg-banner-3',
  'bg-banner-4',
  'bg-banner-5'
];
</script>
