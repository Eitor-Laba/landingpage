<script setup>
import { ref } from 'vue';

const isOpen = ref(false); // Para controlar o estado do menu hambúrguer no mobile

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="bg-white shadow-sm py-4 px-6 fixed w-full z-50">
    <div class="container mx-auto flex justify-between items-center">
      <a href="#" class="text-2xl font-bold text-primary">Seu Logo</a>

      <div class="md:hidden">
        <button @click="toggleMenu" class="text-text-dark focus:outline-none">
          <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-2xl"></i>
        </button>
      </div>

      <nav class="hidden md:flex space-x-6">
        <a href="#features" class="text-text-dark hover:text-secondary transition-colors duration-300">Features</a>
        <a href="#depoimentos" class="text-text-dark hover:text-secondary transition-colors duration-300">Depoimentos</a>
        <a href="#contato" class="btn-primary">Fale Conosco</a>
      </nav>
    </div>

    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="-translate-y-full opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-150 transform"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-full opacity-0"
    >
      <nav v-if="isOpen" class="md:hidden bg-white mt-4 py-4 space-y-4 flex flex-col items-center">
        <a @click="isOpen = false" href="#features" class="text-text-dark hover:text-secondary transition-colors duration-300 w-full text-center py-2">Features</a>
        <a @click="isOpen = false" href="#depoimentos" class="text-text-dark hover:text-secondary transition-colors duration-300 w-full text-center py-2">Depoimentos</a>
        <a @click="isOpen = false" href="#contato" class="btn-primary w-2/3 text-center">Fale Conosco</a>
      </nav>
    </transition>
  </header>
</template>

