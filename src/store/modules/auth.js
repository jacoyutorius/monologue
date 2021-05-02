export default {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    isAuthenticated: state => !!state.user
  },
  mutations: {
    login(state, payload) {
      state.user = payload.user;
    },
    logout(state) {
      state.user = null;
    }
  }
}