import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import(/* webpackChunkName: "gestion" */ '../views/Gestion.vue')
  },
  {
    path: '/projet',
    name: 'Projet',
    component: () => import(/* webpackChunkName: "projet" */ '../views/Projet.vue')
  },
  {
    path: '/crea',
    name: 'Crea',
    component: () => import(/* webpackChunkName: "crea" */ '../views/Crea.vue')
  },
  {
    path: '/dev',
    name: 'Dev',
    component: () => import(/* webpackChunkName: "dev" */ '../views/Dev.vue')
  },
  {
    path: '/gestion',
    name: 'Gestion',
    component: () => import(/* webpackChunkName: "gestion" */ '../views/Gestion.vue')
  },
  {
    path: '/seo',
    name: 'Seo',
    component: () => import(/* webpackChunkName: "seo" */ '../views/Seo.vue')
  },
  {
    path: '/inte',
    name: 'Inte',
    component: () => import(/* webpackChunkName: "inte" */ '../views/Inte.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
