import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// pages
import Index from '@/pages/index/Index.vue'
import Login from '@/pages/login/Login.vue'

export default new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
  strict: process.env.NODE_ENV !== 'production',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login/',
      component: Login
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})