<template>
  <header
    class="bg-transparent w-full top-0 left-0"
    :class="visible ? 'fixed bg-red-500' : 'relative'"
    style="height: 64px;"
  >
    <nav class="container h-full flex justify-between items-center text-white">
      <a href="#" class="inline-block" style="height: 40px;">
        <img alt="Hongbusi logo" class="h-full inline-block" src="../assets/logo.png" />
        <span class=" ml-3 text-20">Hongbusi</span>
      </a>
      <ul class="flex h-full">
        <li v-for="(item, index) in 4" :key="index">
          <a href="javascript:;" class="flex items-center px-4 h-full hover:bg-gray-500 hover:bg-opacity-20 transition-color">
            链接
          </a>
        </li>
      </ul>
    </nav>

    <git-link v-show="visible" />
  </header>
</template>

<script setup lang="ts">
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