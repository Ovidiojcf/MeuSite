<!-- src/components/Projects.vue -->
<template>
    <section class="h-screen not-first-of-type:px-4 py-16 bg-eerie-black text-white">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-orange-web text-3xl md:text-4xl font-bold mb-12 text-center">Meus Projetos</h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="project in projects" :key="project.id"
                    class="bg-charcoal p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <img :src="project.image" :alt="project.title" class="w-full h-40 object-cover rounded-md mb-4" />
                    <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
                    <p class="text-sm text-gray-300 mb-4">{{ project.description }}</p>
                    <a :href="project.link" target="_blank" rel="noopener noreferrer"
                        class="text-orange-web hover:underline">Ver Projeto</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'To-Do List App',
                    description: 'App de organização pessoal para planejar e acompanhar tarefas diárias.',
                    image: '/todoApp.png',
                    link: 'https://github.com/Ovidiojcf/todolist',
                },
                {
                    id: 2,
                    title: 'Ecommerce-API',
                    description: 'Projeto de e-commerce construído com Vue 3, Vite e Pinia, focado em performance, organização de código e boas práticas no consumo de APIs REST.',
                    image: '/ecommerce.png',
                    link: 'https://github.com/Ovidiojcf/E-commerce-API',
                },
                {
                    id: 3,
                    title: 'Landing Page - Fanta',
                    description: 'Projeto de landing page responsiva e animada com HTML, CSS e JavaScript, utilizando GSAP e ScrollTrigger para animações com rolagem.',
                    image: '/lpFanta.png',
                    link: 'https://github.com/Ovidiojcf/LandingPage-Fanta',
                }
            ],
        };
    }
    ,
};
</script>

<style scoped>
.bg-charcoal {
    background-color: #2e2e2e;
}
</style>