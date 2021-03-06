import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Auth from '../views/Auth.vue'
import { authGuard } from "../lib/AuthGuard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: authGuard
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
