import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

const sessionStorage = createPersistedState({
  storage: window.sessionStorage,
  reducer(state) {
    return {
      indexComponent: state.indexComponent,
      user: state.user,
      messages: state.messages
    }
  }
})

const localStorage = createPersistedState({
  storage: window.localStorage,
  reducer (state) {
    return {
      userToken: state.userToken
    }
  }
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [sessionStorage, localStorage],
  state: {
    indexComponent: 'Following',
    authority: 1,
    user: null,
    userToken: "",
    messages: [],
    messagePollingInterval: 30000
  },
  getters: {
    indexComponent: state => state.indexComponent,
    authority: state => state.authority,
    user: state => state.user,
    userToken: state => state.userToken,
    messages: state => state.messages,
    messagePollingInterval: state => state.messagePollingInterval
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
    },
    setUserToken (state, token) {
      state.userToken = token;
    },
    pushMessage (state, message) {
      state.messages.push(message);
    },
    setMessagePollingInterval (state, interval) {
      const num = parseInt(interval);
      if (isNaN(num)) {
        return;
      }
      state.messagePollingInterval = interval;
    }
  },
  actions: {

  }
})
