import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue' // import komponen halaman

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
