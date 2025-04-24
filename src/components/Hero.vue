<template>
    <section class="flex flex-col h-screen md:flex-row items-center justify-between gap-6 md:gap-4 p-10 bg-white">
        <!-- Esquerda: Texto principal -->
        <div class="text-center md:text-left md:w-1/3 space-y-4">
            <h1 class="text-3xl md:text-5xl font-bold text-eerie-black">Olá, eu sou</h1>
            <p class="text-lg text-gray-700">Desenvolvedor Front-end com foco em acessibilidade e UX.</p>
        </div>

        <div class="flex flex-col items-center md:items-center">
            <div class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
                <img src="@/assets/minha-foto.png" alt="Minha foto" class="w-full h-full object-cover" />
            </div>

            <div class="flex mt-4 gap-4">
                <a href="https://github.com/Ovidiojcf" target="_blank" rel="noopener">
                    <FontAwesomeIcon icon="fa-brands fa-github" size="2x"
                        class="text-eerie-black hover:text-orange-web transition-colors" />
                </a>
                <a href="www.linkedin.com/in/ovidiojcf" target="_blank" rel="noopener">
                    <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x"
                        class=" text-eerie-black hover:text-orange-web transition-colors" />
                </a>
                <a href="https://twitter.com/seu-usuario" target="_blank" rel="noopener">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" size="2x"
                        class="text-eerie-black hover:text-orange-web transition-colors" />
                </a>
            </div>
        </div>



        <!-- Direita: Descrição -->
        <div class="text-center md:text-right md:w-1/3 space-y-4">
            <p class="text-md text-gray-700">
                Acredito em design inclusivo e crio experiências digitais acessíveis para todos.
            </p>
        </div>
    </section>
</template>

