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
}

// Icon
import Icon from '@/assets/icon/Icon.vue'
import Post from '@/components/Post.vue'
Vue.component('Icon', Icon);
Vue.component('Post', Post)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
