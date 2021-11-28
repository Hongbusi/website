<template>
  <swiper
    class="h-screen"
    :loop="true"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 6000, disableOnInteraction: false }"
  >
    <swiper-slide>
      <paper-bird />
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

import PaperBird from './PaperBird.vue';
</script>
