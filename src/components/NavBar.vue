<template>
    <nav class="bg-eerie-black text-orange-web p-4 flex justify-between items-center">
      <h1 class="text-xl font-bold">Meu Portfólio</h1>
  
      <!-- Botão do menu (hamburger) - visível apenas no mobile -->
      <button class="md:hidden" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
                stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
  
      <!-- Menu (visível em desktop ou quando toggle for ativado no mobile) -->
      <ul
        :class="[
          'flex gap-4',
          'flex-col md:flex-row',
          showMenu ? 'block' : 'hidden',
          'md:flex',
          'absolute md:static top-16 left-0 w-full md:w-auto bg-eerie-black md:bg-transparent p-4 md:p-0'
        ]"
      >
        <li><a href="#" class="font-semibold hover:text-carmine">Início</a></li>
        <li><a href="#" class="font-semibold hover:text-carmine">Projetos</a></li>
        <li><a href="#" class="font-semibold hover:text-carmine">Contato</a></li>
      </ul>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const showMenu = ref(false)
  const toggleMenu = () => {
    showMenu.value = !showMenu.value
  }
  </script>
  
  <style lang="css">

  </style>
  