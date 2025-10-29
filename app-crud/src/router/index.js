import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/view/LoginView.vue'
import DashboardView from '@/view/DashboardView.vue'
import ProductoView from '@/view/ProductoView.vue'


const routes = [
  { path: '/', component: LoginView },
  { path: '/dashboard', component: DashboardView },
  { path: '/productos', component: ProductoView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})