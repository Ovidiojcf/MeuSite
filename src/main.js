import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/main.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedin, faTwitter, faInstagram)

const app = createApp(App)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
