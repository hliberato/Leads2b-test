import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '@/store'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'Home',
  component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  meta: { requiresAuth: true }
}, {
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
}]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (Store.getters.isLoggedIn) next()
    else next('login')
  } else next()
})

export default router
