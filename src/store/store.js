import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

const sessionStorage = createPersistedState({
  storage: window.sessionStorage,
  reducer(state) {
    return {
      indexComponent: state.indexComponent,
      user: state.user
    }
  }
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [sessionStorage],
  state: {
    indexComponent: 'Following',
    authority: 1,
    user: null
  },
  getters: {
    indexComponent: state => state.indexComponent,
    authority: state => state.authority,
    user: state => state.user
  },
  mutations: {
    changeIndexComponent (state, name) {
      if (name && typeof name==='string') {
        state.indexComponent = name;
      }
    },
    setAuthority (state, authority) {
      if (authority && typeof authority === 'number') {
        state.authority = authority;
      }
    },
    setUser (state, user) {
      state.user = user;
    }
  },
  actions: {

  }
})
