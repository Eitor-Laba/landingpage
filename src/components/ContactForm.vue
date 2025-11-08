<script setup>
import { ref } from 'vue';

const form = ref({
  nome: '',
  email: '',
  mensagem: ''
});

const errors = ref({
  nome: '',
  email: '',
  mensagem: ''
});

const formStatus = ref('');
const isSubmitting = ref(false);

const validateForm = () => {
  let isValid = true;
  errors.value = { nome: '', email: '', mensagem: '' };

  if (form.value.nome.length < 2) {
    errors.value.nome = 'O nome deve ter pelo menos 2 caracteres.';
    isValid = false;
  }

  if (!form.value.email.match(/^[^s@]+@[^s@]+.[^s@]+$/)) {
    errors.value.email = 'Por favor, insira um e-mail válido.';
    isValid = false;
  }

  if (form.value.mensagem.length < 10) {
    errors.value.mensagem = 'A mensagem deve ter pelo menos 10 caracteres.';
    isValid = false;
  }

  return isValid;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    formStatus.value = 'Por favor, corrija os erros no formulário.';
    return;
  }

  isSubmitting.value = true;
  formStatus.value = 'Enviando...';

  try {
    // 3. Interatividade: Possível integração futura com backend via fetch/AJAX.
    // Simulação de envio para um backend
    const response = await new Promise(resolve => setTimeout(() => {
        // Simular sucesso ou falha
        const success = Math.random() > 0.1; // 90% de sucesso
        if (success) {
            resolve({ status: 200, message: 'Mensagem enviada com sucesso!' });
        } else {
            throw new Error('Erro ao enviar mensagem. Tente novamente.');
        }
    }, 1500));

    if (response.status === 200) {
      formStatus.value = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
      form.value = { nome: '', email: '', mensagem: '' }; // Limpa o formulário
    } else {
      throw new Error('Resposta inesperada do servidor.');
    }
  } catch (error) {
    formStatus.value = `Erro ao enviar mensagem: ${error.message}`;
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <section id="contato" class="py-16 bg-background">
    <div class="container mx-auto px-6 max-w-xl">
      <h2 class="text-4xl font-bold text-text-dark text-center mb-12">Fale Conosco</h2>
      <form @submit.prevent="handleSubmit" class="bg-white p-8 rounded-lg shadow-md">
        <div class="mb-6">
          <label for="nome" class="block text-text-dark text-lg font-semibold mb-2">Nome:</label>
          <input
            type="text"
            id="nome"
            v-model="form.nome"
            @blur="validateForm"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            :class="{ 'border-red-500': errors.nome }"
            required
            minlength="2"
          />
          <p v-if="errors.nome" class="text-red-500 text-sm mt-1">{{ errors.nome }}</p>
        </div>

        <div class="mb-6">
          <label for="email" class="block text-text-dark text-lg font-semibold mb-2">E-mail:</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            @blur="validateForm"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            :class="{ 'border-red-500': errors.email }"
            required
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>

        <div class="mb-8">
          <label for="mensagem" class="block text-text-dark text-lg font-semibold mb-2">Mensagem:</label>
          <textarea
            id="mensagem"
            v-model="form.mensagem"
            @blur="validateForm"
            rows="6"
            class="w-full px-4 py-3 border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-secondary"
            :class="{ 'border-red-500': errors.mensagem }"
            required
            minlength="10"
          ></textarea>
          <p v-if="errors.mensagem" class="text-red-500 text-sm mt-1">{{ errors.mensagem }}</p>
        </div>

        <button
          type="submit"
          class="btn-form-submit w-full"
          :disabled="isSubmitting"
        >
          {{ isSubmitting ? 'Enviando...' : 'Enviar Mensagem' }}
        </button>

        <p v-if="formStatus" :class="{'text-green-600': formStatus.includes('sucesso'), 'text-red-600': formStatus.includes('Erro')}" class="mt-4 text-center font-medium">
          {{ formStatus }}
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.btn-form-submit {
  @apply bg-primary text-white py-3 px-6 rounded-md font-bold text-lg
         hover:bg-secondary transition-all duration-300 ease-in-out
         transform hover:-translate-y-1
         disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none; /* Estilo para botão desabilitado */
}
</style>