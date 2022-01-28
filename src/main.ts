import { createApp } from 'vue'
import './styles.css'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Homepage from './Homepage.vue'
import NotFound from './NotFound.vue'

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        { path: '/', name: 'home', component: Homepage },
        { path: '/:pathMatch(.*)*', name: '404', component: NotFound }
    ]
})

createApp(App)
    .use(router)
    .mount('#app')
