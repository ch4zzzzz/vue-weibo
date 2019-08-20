import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store/store'
import './registerServiceWorker'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$axios = axios;

if (process.env.NODE_ENV !== 'production') {
  (async () => {
    const mock = await import('@/mock/mock.js');
  })()
  axios.defaults.baseURL = '/api/'
}

// 访问权限控制
router.beforeEach((to, from, next) => {
  const {meta} = to;
  if (meta && meta.authority) {
    if (store.getters.authority !== meta.authority) {
      return;
    }
  }
  next();
})

// 注册指令
import {authority} from '@/directive/authority'
import {lazyLoadDirective} from '@/directive/lazy-load'
Vue.directive('authority', authority);
Vue.directive('lazy-load', lazyLoadDirective)

// Icon
import Icon from '@/assets/icon/Icon.vue'
import Post from '@/components/post/Post.vue'
Vue.component('Icon', Icon);
Vue.component('Post', Post);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
