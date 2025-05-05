import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueSplide from '@splidejs/vue-splide'

import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.use(VueSplide)
app.mount('#app')

AOS.init()
