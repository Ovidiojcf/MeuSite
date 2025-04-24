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
                    title: 'Portfólio Pessoal',
                    description: 'Um site responsivo para apresentar minhas habilidades e projetos.',
                    image: new URL('@/assets/projects/portfolio.png', import.meta.url).href,
                    link: 'https://meuportfolio.com',
                },
                {
                    id: 2,
                    title: 'Aplicativo de Tarefas',
                    description: 'Uma aplicação Vue.js para gerenciamento de tarefas diárias.',
                    image: new URL('@/assets/projects/todo-app.png', import.meta.url).href,
                    link: 'https://github.com/usuario/todo-app',
                },
                // Adicione mais projetos conforme necessário
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