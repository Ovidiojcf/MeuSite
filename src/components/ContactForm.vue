<template>
    <section class="px-4 py-16 bg-eerie-black text-white">
        <div class="max-w-3xl mx-auto">
            <h2 class="text-orange-web text-3xl md:text-4xl font-bold mb-8 text-center">
                Entre em Contato
            </h2>

            <form @submit.prevent="sendEmail" class="space-y-6">
                <div>
                    <label for="name" class="block mb-1">Nome</label>
                    <input type="text" id="name" v-model="form.name" required
                        class="w-full px-4 py-2 rounded-md bg-white text-black" />
                </div>

                <div>
                    <label for="email" class="block mb-1">Email</label>
                    <input type="email" id="email" v-model="form.email" required
                        class="w-full px-4 py-2 rounded-md bg-white text-black" />
                </div>

                <div>
                    <label for="message" class="block mb-1">Mensagem</label>
                    <textarea id="message" v-model="form.message" required rows="5"
                        class="w-full px-4 py-2 rounded-md bg-white text-black"></textarea>
                </div>

                <div class="flex justify-center sm:justify-start">
                    <button type="submit"
                        class="bg-orange-web hover:bg-orange-500 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300">
                        Enviar
                    </button>
                </div>

                <p v-if="success" class="text-green-400 mt-4 text-center">
                    Mensagem enviada com sucesso! ✉️
                </p>
                <p v-if="error" class="text-red-400 mt-4 text-center">
                    Algo deu errado. Tente novamente. ❌
                </p>
            </form>
        </div>
    </section>
</template>

<script setup>
import emailjs from 'emailjs-com'
import { ref } from 'vue'

// Inicialização global do SDK
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
