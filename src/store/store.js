import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

const sessionStorage = createPersistedState({
  storage: window.sessionStorage,
  reducer(state) {
    return {
      indexComponent: state.indexComponent,
    }
  }
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [sessionStorage],
  state: {
    indexComponent: 'Following'
  },
  getters: {
    indexComponent: state => state.indexComponent
  },
  mutations: {
    changeIndexComponent (state, name) {
      if (name && typeof name==='string') {
        state.indexComponent = name;
      }
    }
  },
  actions: {

  }
})
