<template>
  <section id="features" class="py-16 bg-background">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold text-text-dark mb-12">Recursos Incríveis</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <article class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
          <i class="fas fa-rocket text-5xl text-secondary mb-4"></i>
          <h3 class="text-2xl font-semibold text-text-dark mb-3">Velocidade</h3>
          <p class="text-text-dark opacity-90">Performance otimizada para a melhor experiência do usuário, garantindo carregamento rápido.</p>
        </article>
        
        <article class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
          <i class="fas fa-layer-group text-5xl text-secondary mb-4"></i>
          <h3 class="text-2xl font-semibold text-text-dark mb-3">Design Clean</h3>
          <p class="text-text-dark opacity-90">Interface intuitiva e focada no que realmente importa, com um visual moderno e agradável.</p>
        </article>

        <article class="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-2">
          <i class="fas fa-mobile-alt text-5xl text-secondary mb-4"></i>
          <h3 class="text-2xl font-semibold text-text-dark mb-3">Responsivo</h3>
          <p class="text-text-dark opacity-90">Funciona perfeitamente em qualquer dispositivo, do desktop ao mobile, adaptando-se a todas as telas.</p>
        </article>

        </div>
    </div>
  </section>
</template>

<style scoped>
/* Ícones vetoriais/SVG são carregados via Font Awesome no main.css */
/* Não é necessário CSS adicional aqui para os ícones, Tailwind cuida do layout */
</style>