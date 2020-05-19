import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '@/store'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
}, {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
}, {
  path: '*',
  redirect: '/'
}]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (Store.getters.isLoggedIn) {
    if (to.name === 'Login') {
      next('home')
    } next()
  } else to.name === 'Login' ? next() : next('login')
})

export default router
