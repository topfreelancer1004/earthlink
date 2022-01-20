import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Account from '../components/Account.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
