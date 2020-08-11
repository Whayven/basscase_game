import Vue from 'vue'
import VueRouter from 'vue-router'
import Intro from '../views/Intro.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/cs',
    name: 'Character',
    component: () => import(/* webpackChunkName: "about" */ '../views/Character.vue')
  },
  {
    path: '/cc',
    name: 'CharacterScene',
    component: () => import('../views/CharacterScene.vue')
  },
  {
    path: '/challenges',
    name: 'Challenges',
    component: () => import('../views/Challenges.vue')
  },
  {
    path: '/select',
    name: 'Select',
    component: () => import('../views/Select.vue')
  },
  {
    path: '/bazel',
    name: 'Bazel',
    component: () =>  import('../views/Bazel.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
