<template>
    <section class="px-4 py-16 bg-eerie-black text-white">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-orange-web text-3xl md:text-4xl font-bold mb-12 text-center">
                Entre em Contato
            </h2>

            <div class="grid md:grid-cols-2 gap-12 items-start">
                <!-- Coluna Esquerda: Texto de contato -->
                <div class="space-y-6  border-2 rounded-md border-orange-web p-6">
                    <h3 class="text-2xl font-semibold">Vamos nos conectar!</h3>
                    <p>
                        Estou em busca de novas oportunidades e minha caixa de entrada está sempre aberta.
                        Seja para uma dúvida ou apenas para dizer oi, prometo tentar responder o mais rápido possível!
                    </p>

                    <div class="flex items-center gap-4 mt-4">
                        <a href="https://github.com/Ovidiojcf" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon="fa-brands fa-github" size="2x"
                                class="text-orange-web hover:text-carmine transition-colors" />
                        </a>
                        <a href="www.linkedin.com/in/ovidiojcf" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x"
                                class=" text-orange-web hover:text-carmine transition-colors" />
                        </a>
                        <a href="https://twitter.com/seu-usuario" target="_blank" rel="noopener">
                            <FontAwesomeIcon icon="fa-brands fa-instagram" size="2x"
                                class="text-orange-web hover:text-carmine transition-colors" />
                        </a>
                    </div>
                </div>

                <!-- Coluna Direita: Formulário -->
                <form @submit.prevent="sendEmail" class="space-y-6  border-2 rounded-md border-orange-web p-6">
                    <div>
                        <label for="name" class="block mb-1">Nome</label>
                        <input type="text" id="name" v-model="form.name" required placeholder="Digite seu nome"
                            class="w-full px-4 py-2 rounded-md bg-white text-black" />
                    </div>

                    <div>
                        <label for="email" class="block mb-1">Email</label>
                        <input type="email" id="email" v-model="form.email" required placeholder="exemplo@email.com"
                            class="w-full px-4 py-2 rounded-md bg-white text-black" />
                    </div>

                    <div>
                        <label for="message" class="block mb-1">Mensagem</label>
                        <textarea id="message" v-model="form.message" required rows="5"
                            placeholder="Escreva sua mensagem aqui..."
                            class="w-full px-4 py-2 rounded-md bg-white text-black"></textarea>
                    </div>

                    <div class="flex justify-center md:justify-start">
                        <button type="submit"
                            class="bg-orange-web hover:text-carmine text-white font-semibold py-2 px-6 rounded-md transition-all duration-300">
                            Enviar
                        </button>
                    </div>

                    <p v-if="success" class="text-green-400 mt-4 text-center">Mensagem enviada com sucesso! ✉️</p>
                    <p v-if="error" class="text-red-400 mt-4 text-center">Algo deu errado. Tente novamente. ❌</p>
                </form>
            </div>
        </div>
    </section>
</template>

<script setup>
import emailjs from 'emailjs-com'
import { ref } from 'vue'

emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    blockHeadless: true,
})

const form = ref({
    name: '',
    email: '',
    message: ''
})

const success = ref(false)
const error = ref(false)

const sendEmail = () => {
    success.value = false
    error.value = false

    const now = new Date()
    const time = now.toLocaleString('pt-BR')

    emailjs
        .send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                title: "Contato do portfólio",
                name: form.value.name,
                time: time,
                message: form.value.message,
                email: form.value.email
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            success.value = true
            form.value = { name: '', email: '', message: '' }
        })
        .catch(() => {
            error.value = true
        })
}
</script>