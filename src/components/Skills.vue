<template>
    <section class="h-screen px-4 py-16  text-eerie-black bg-white">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-orange-web text-3xl md:text-5xl font-bold mb-12 text-center">Minhas Habilidades</h2>

            <div class="grid md:grid-cols-2 gap-12">
                <!-- Hard Skills -->
                <div>
                    <h3 class="text-2xl font-semibold mb-6 text-center">Tecnologias</h3>
                    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
                        <div class="flex flex-col items-center">
                            <img class="w-12 h-12 object-contain mt-2" src="@/assets/skills/html-icon.svg" alt="HTML">
                            <p class="mt-2 text-sm">HTML</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="w-12 h-12 object-contain mt-2" src="@/assets/skills/css-icon.svg" alt="CSS">
                            <p class="mt-2 text-sm">CSS</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="w-12 h-12 object-contain mt-2"
                                src="@/assets/skills/javascript-programming-language-icon.svg" alt="JavaScript">
                            <p class="mt-2 text-sm">JavaScript</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="w-12 h-12 object-contain mt-2" src="@/assets/skills/vue-js-icon.svg" alt="Vue">
                            <p class="mt-2 text-sm">Vue</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="w-12 h-12 object-contain mt-2" src="@/assets/skills/tailwind-css-icon.svg"
                                alt="Tailwind">
                            <p class="mt-2 text-sm">Tailwind</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="w-12 h-12 object-contain mt-2" src="@/assets/skills/github-icon.svg"
                                alt="GitHub">
                            <p class="mt-2 text-sm">GitHub</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="w-12 h-12 object-contain mt-2" src="@/assets/skills/git-icon.svg" alt="Git">
                            <p class="mt-2 text-sm">Git</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <img class="w-12 h-12 object-contain mt-2" src="@/assets/skills/figma-icon.svg" alt="Figma">
                            <p class="mt-2 text-sm">Figma</p>
                        </div>
                    </div>
                </div>

                <!-- Soft Skills -->
                <div>
                    <h3 class="text-2xl font-semibold mb-6 text-center">Soft Skills</h3>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
                        <div class="flex flex-col items-center">
                            <i class="fi fi-rr-user-gear text-orange-web text-5xl hover:text-carmine"></i>
                            <p class="mt-2 text-sm text-center">Esforçado</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <i class="fi fi-ss-brain-circuit text-orange-web text-5xl hover:text-carmine"></i>
                            <p class="mt-2 text-sm text-center">Mente curiosa</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <i class="fi fi-br-assessment text-orange-web text-5xl hover:text-carmine"></i>
                            <p class="mt-2 text-sm text-center">Detalhista</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <i class="fi fi-bs-team-check text-orange-web text-5xl hover:text-carmine"></i>
                            <p class="mt-2 text-sm text-center">Colaborador</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <i class="fi fi-rr-shield-check text-orange-web text-5xl hover:text-carmine"></i>
                            <p class="mt-2 text-sm text-center">Resiliência prática</p>
                        </div>
                        <div class="flex flex-col items-center">
                            <i class="fi fi-rr-sparkles text-orange-web text-5xl hover:text-carmine"></i>
                            <p class="mt-2 text-sm text-center">Catalisador de ideias</p>
                        </div>
                    </div>
                    <p class="text-center mt-4">
                        Uicons by <a href="https://www.flaticon.com/uicons"
                            class="underline text-orange-web hover:text-carmine">Flaticon</a>
                    </p>

                </div>
            </div>
        </div>
    </section>
</template>
