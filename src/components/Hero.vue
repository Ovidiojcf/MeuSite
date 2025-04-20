<script>

</script>

<template>
    <section class="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 p-10 bg-white">
        <!-- Esquerda: Texto principal -->
        <div class="text-center md:text-left md:w-1/3 space-y-4">
            <h1 class="text-3xl md:text-5xl font-bold text-eerie-black">Olá, eu sou</h1>
            <p class="text-lg text-gray-700">Desenvolvedor Front-end com foco em acessibilidade e UX.</p>
        </div>

        <!-- Centro: Imagem -->
        <div class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
            <img src="@/assets/minha-foto.png" alt="Minha foto" class="w-full h-full object-cover" />
        </div>

        <!-- Direita: Descrição -->
        <div class="text-center md:text-right md:w-1/3 space-y-4">
            <p class="text-md text-gray-700">
                Acredito em design inclusivo e crio experiências digitais acessíveis para todos.
            </p>
        </div>
    </section>
</template>

<style scoped>
/* se quiser aplicar algo extra pra mobile aqui */
</style>