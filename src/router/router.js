import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// pages
import Index from '@/pages/index/Index.vue'
const Login = () => import('@/pages/login/Login.vue')
const Compose = () => import('@/pages/compose/Compose.vue')
const MessageView = () => import('@/pages/message-view/MessageView.vue')
/* 
路由meta信息:
  authority: 访问权限，
    1仅为未登录的用户可以访问
    2仅为已登录的用户可以访问
    未设置则所有用户都可以访问

*/

const router = new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
  strict: process.env.NODE_ENV !== 'production',
  routes: [
    {
      name: 'index',
      path: '/',
      component: Index
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
      meta: {
        authority: 1
      }
    },
    {
      name: "compose",
      path: '/compose',
      component: Compose,
    },
    {
      name: "message-view",
      path: 'messages',
      component: MessageView
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router;