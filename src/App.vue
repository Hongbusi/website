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
      <h1>{{ item.text }}</h1>
      <component :is="item.component" />
    </section>
  </main>
</template>

<script setup lang="ts">
import TheNav from './components/Nav.vue';
import Docs from './views/Docs.vue';
import About from './views/About.vue';
import Links from './views/Links.vue';


const sections = [
  { text: '文档汇总', anchorPoint: 'docs', component: Docs },
  { text: '关于我', anchorPoint: 'about', component: About },
  { text: '友情链接', anchorPoint: 'links', component: Links }
];

</script>
