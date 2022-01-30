import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@fontsource/roboto'
import '@fontsource/teko'
import './styles.css'
import App from './App.vue'
import Homepage from './Homepage.vue'
import NotFound from './NotFound.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: Homepage },
        { path: '/:pathMatch(.*)*', name: '404', component: NotFound }
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
