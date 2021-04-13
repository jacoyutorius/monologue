<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/images/monologue.png" width="112" height="28">
        </a>
        
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-rounded is-primary">
                <strong>Sign up</strong>
              </a>
              <a @click="signOut" class="button is-rounded is-light">Signout</a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
import '@aws-amplify/ui-vue';
import { Auth } from "aws-amplify";

export default {
  name: "Main",
  data() {
    return {
      formFields: [
        {
          type: 'email',
          label: 'Custom email Label',
          placeholder: 'custom email placeholder',
          required: true,
        },
        {
          type: 'password',
          label: 'Custom Password Label',
          placeholder: 'custom password placeholder',
          required: true,
        }
      ]
    }
  },
  methods: {
    signOut: async function() {
      await Auth.signOut().catch(err => console.log(err));
      this.$router.push("/auth");
    }
  }
}
</script>

<style>
</style>
