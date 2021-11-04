<template>
  <header
    class="fixed top-0 left-0 w-full h-16"
    :class="visible && 'bg-red-500'"
  >
    <nav class="container h-full flex justify-between items-center text-white">
      <a href="#" class="inline-block h-12">
        <img alt="Hongbusi logo" class="h-full inline-block" src="../assets/logo.png" />
        <span class=" ml-3 text-20">Hongbusi</span>
      </a>
      <ul class="flex h-full">
        <li v-for="(item, index) in sections" :key="index">
          <a :href="`#${item.anchorPoint}`" class="flex items-center px-6 h-full hover:bg-gray-500 hover:bg-opacity-20 transition-color">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </nav>

    <git-link v-show="visible" />
  </header>
</template>

<script setup lang="ts">
const sections = [
  { text: '首页', anchorPoint: 'home' },
  { text: '文档汇总', anchorPoint: 'docs' },
  { text: '关于我', anchorPoint: 'about' },
  { text: '友情链接', anchorPoint: 'links' }
];

import { ref, onMounted, onUnmounted } from 'vue';
import GitLink from './GitLink.vue';

const visibilityHeight = 100;
const visible = ref(false);

function getScrollTop() {
  const scrollTop = document.documentElement.scrollTop;
  visible.value = scrollTop >= visibilityHeight;
}

onMounted(() => {
  getScrollTop();
  window.addEventListener('scroll', getScrollTop);
});

onUnmounted(() => {
  window.removeEventListener('scroll', getScrollTop);
}); 
</script>