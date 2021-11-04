<template>
  <the-nav />

  <main>
    <section class="h-96 bg-yellow-400" style="margin-top: -64px;"></section>

    <section
      v-for="(item, index) in sections"
      :key="index"
      :id="`${item.anchorPoint}`"
      class="container min-h-screen pt-24 pb-6"
    >
      <h3>{{ item.text }}</h3>
    </section>
  </main>
</template>

<script setup lang="ts">
const sections = [
  { text: '首页', anchorPoint: 'home' },
  { text: '文档汇总', anchorPoint: 'docs' },
  { text: '关于我', anchorPoint: 'about' },
  { text: '友情链接', anchorPoint: 'links' }
];

import TheNav from './components/Nav.vue';
</script>
