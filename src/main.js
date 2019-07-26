import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import store from '@/store/store'
import './registerServiceWorker'

Vue.config.productionTip = false

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

import axios from 'axios'
Vue.prototype.$axios = axios;

if (process.env.NODE_ENV !== 'production') {
  (async () => {
    const mock = await import('@/mock/mock.js');
    console.log(mock)
  })()
}

// Icon
import Icon from '@/assets/icon/Icon.vue'
Vue.component('Icon', Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
