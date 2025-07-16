import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import home from '../views/home.vue'
// import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: '/', name: '', component: HomeView },
    { path: '/', name: 'home', component: home },
  ],
})

export default router

// { path: '/about', name: 'about', component: AboutView },
// {
//   path: '/',
//   name: 'home',
//   component: HomeView,
// },
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (About.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import('../views/AboutView.vue'),
// },
