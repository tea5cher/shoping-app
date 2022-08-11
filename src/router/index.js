import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../pages/MainPage'
import CartPage from '../pages/CartPage'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
