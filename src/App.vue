<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import TheHeader from './components/TheHeader.vue';
import HeroSection from './components/HeroSection.vue';
import FeaturesSection from './components/FeaturesSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import ContactForm from './components/ContactForm.vue';
import TheFooter from './components/TheFooter.vue';
import ScrollToTopButton from './components/ScrollToTopButton.vue';

// 6. Extras Opcionais: Scroll Reveal (Exemplo simples com observador)
const sections = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target); // Opcional: anima apenas uma vez
      }
    });
  }, { threshold: 0.1 }); // Começa a animar quando 10% da seção está visível

  document.querySelectorAll('section').forEach(section => {
    sections.value.push(section);
    observer.observe(section);
  });
});

</script>

<template>
  <div id="app" class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-grow">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ContactForm />
    </main>
    <TheFooter />
    <ScrollToTopButton />
  </div>
</template>

<style>
/* 6. Extras Opcionais: Animação leve na rolagem (Scroll Reveal) */
/* Classes de animação Tailwind podem ser mais avançadas, mas aqui um exemplo CSS básico */
section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

section.fade-in {
  opacity: 1;
  transform: translateY(0);
}
</style>