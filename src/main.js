import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage';
import PremierePage from '@/pages/PremierePage';
import ResolvePage from '@/pages/ResolvePage';
const routes = [
    { path: '/', component: HomePage },
    { path: '/premiere', component: PremierePage },
    { path: '/resolve', component: ResolvePage }
  ]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

createApp(App)
.use(router)
.mount('#app')
