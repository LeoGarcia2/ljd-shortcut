import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: () => import(/* webpackChunkName: "gestion" */ '../views/Gestion.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/projet',
    name: 'Projet',
    component: () => import(/* webpackChunkName: "projet" */ '../views/Projet.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/crea',
    name: 'Crea',
    component: () => import(/* webpackChunkName: "crea" */ '../views/Crea.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dev',
    name: 'Dev',
    component: () => import(/* webpackChunkName: "dev" */ '../views/Dev.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/gestion',
    name: 'Gestion',
    component: () => import(/* webpackChunkName: "gestion" */ '../views/Gestion.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/seo',
    name: 'Seo',
    component: () => import(/* webpackChunkName: "seo" */ '../views/Seo.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/inte',
    name: 'Inte',
    component: () => import(/* webpackChunkName: "inte" */ '../views/Inte.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/password',
    name: 'Security',
    component: () => import(/* webpackChunkName: "inte" */ '../views/Password.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!storageHelper.getItem('user-password')) next('/password')
    else next()
  } else next()
})

export default router
