<template>
    <section class=" h-screen bg-eerie-black px-6 py-12 md:grid md:grid-cols-2 gap-8 items-center">
        <!-- Texto -->
        <div>
            <h2 class="text-orange-web text-3xl font-bold mb-4 p-2">Quem sou eu</h2>
            <p class="text-white font-semibold text-justify p-2">
                Sou Ovídio, paraense, formado em Ciência da Computação pela Unicentro e dedicado ao desenvolvimento de
                interfaces modernas e funcionais. No front-end, encontrei o equilíbrio ideal entre lógica, design e
                usabilidade — uma área onde consigo aplicar tanto raciocínio técnico quanto sensibilidade visual. Tenho
                experiência com Vue.js, React e Tailwind CSS, sempre buscando escrever códigos limpos, acessíveis e com
                atenção aos detalhes.<br>

                Além das habilidades técnicas, valorizo muito o trabalho em equipe. Acredito que projetos bem-sucedidos
                são construídos com colaboração, troca de ideias e comunicação clara — e procuro sempre contribuir com
                empatia, responsabilidade e espírito coletivo.<br>

                Sou focado, proativo e tenho facilidade em aprender novas tecnologias e me adaptar a diferentes
                contextos. Acredito que boas interfaces contam histórias, e é isso que procuro entregar em cada
                trabalho: algo que conecte, funcione bem e cause uma boa impressão. Estou em constante busca por
                desafios que me tirem da zona de conforto e impulsionem meu crescimento profissional e pessoal.
            </p>
        </div>

        <!-- Bento Grid de Fotos -->
        <div class="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-1 mt-8 md:mt-0">
            <!-- Imagem maior (ocupa 2 linhas) -->
            <img src="@/assets/Photo1.jpg" class="rounded-xl object-cover h-full w-full row-span-2" />
            <!-- Imagens menores -->
            <img src="@/assets/Photo2.jpg" class="rounded-xl object-cover h-50 w-full" />
            <img src="@/assets/Photo3.jpg" class="rounded-xl object-cover h-50 w-full" />
        </div>

    </section>
</template>