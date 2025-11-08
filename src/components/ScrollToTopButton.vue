<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showButton = ref(false);

const handleScroll = () => {
  showButton.value = window.scrollY > 300; // Mostra o botão após 300px de scroll
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg
             hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2
             transition-all duration-300 ease-in-out z-50"
      aria-label="Voltar ao Topo"
      title="Voltar ao Topo"
    >
      <i class="fas fa-arrow-up text-xl"></i>
    </button>
  </transition>
</template>