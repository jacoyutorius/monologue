export default {
  namespaced: true,
  state: {
    state: null,
    user: null
  },
  mutations: {
    login(state, payload) {
      state.state = payload.state;
      state.user = payload.user;
    },
    logout(state) {
      state.state = null;
      state.user = null;
    }
  }
}