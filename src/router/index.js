import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/home.vue' // import komponen halaman

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  // route lain kalau ada
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
