<template>
  <the-nav />
  <main class="-mt-16">
    <swiper />

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
import TheNav from '@/components/Nav.vue';
import Swiper from '@/components/Swiper.vue';
import Docs from '@/components/Docs.vue';
import About from '@/components/About.vue';
import Links from '@/components/Links.vue';

const sections = [
  { text: '文档汇总', anchorPoint: 'docs', component: Docs },
  { text: '关于我', anchorPoint: 'about', component: About },
  { text: '友情链接', anchorPoint: 'links', component: Links }
];
</script>
