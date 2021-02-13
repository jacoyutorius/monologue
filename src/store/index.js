import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from "./modules/auth";

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState({
    key: 'monologue',
    paths: ['auth'],
    storage: window.sessionStorage
  })],
  modules: {
    auth
  }
})

export default store
