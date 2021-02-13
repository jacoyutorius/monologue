import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

require('./assets/sass/style.scss'); //追加

import { Hub } from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";

function setUser() {
  return Auth.currentAuthenticatedUser()
    .then((data) => {
      if (data && data.signInUserSession) {
        store.commit("auth/login", {
          user: data
        });
        return data;
      }
    })
    .catch((e) => {
      console.error(e);
      store.commit("auth/logout");
      return null;
    });
}

Hub.listen("auth", async (data) => {
  switch (data.payload.event) {
    case "signIn":
      await setUser();
      router.push({ path: "/" });
      break;
    case "signOut":
      store.commit("auth/logout");
      router.push({ path: "/auth" });
      break;
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
