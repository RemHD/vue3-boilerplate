import './assets/reset.css'
import './assets/main.css'
import './assets/css/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/router'
import NavBar from './components/NavBar.component.vue'
import CustomButton from './components/CustomButton.component.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('NavBar', NavBar)
app.component('CustomButton', CustomButton)

app.mount('#app')
