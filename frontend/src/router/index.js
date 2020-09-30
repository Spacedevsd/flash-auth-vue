import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Login from '../views/Login'
import Protected from '../views/Protected'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/protected',
    name: 'Protected',
    component: Protected,
    meta: {
      requiredAuth: true,
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiredAuth)) {
    if(!store.getters.logged) {
      next({
        name: 'Login',
      })
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
