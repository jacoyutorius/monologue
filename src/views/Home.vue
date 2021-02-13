<template>
  <div class="home">
    <section class="columns">
      <div class="container column is-2 m-2">
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Customers</a></li>
          </ul>
        </aside>
      </div>

      <div class="container column is-7">
        <!-- <div>Hello, {{user.username}}</div> -->
        <div class="home">
          <div class="card my-3">
            <div class="card-content">
              <div class="content">
                <div class="field">
                  <label class="label">Message</label>
                  <div class="control">
                    <textarea class="textarea" placeholder="Textarea"></textarea>
                  </div>
                </div>

                <div class="field is-grouped">
                  <div class="control">
                    <button class="button">Submit</button>
                  </div>
                  <div class="control">
                    <button class="button is-light">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card my-3">
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a> 
              </div>
            </div>
            <div class="card-footer">
              <div class="card-footer-item is-small">
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

          <div class="card my-3">
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a> 
              </div>
            </div>
            <div class="card-footer">
              <div class="card-footer-item">
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

          <div class="card my-3">
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a> 
              </div>
            </div>
            <div class="card-footer">
              <div class="card-footer-item">
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a> 
              </div>
            </div>
            <div class="card-footer">
              <div class="card-footer-item">
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="container column is-5">
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

export default {
  name: 'Home',
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      console.log({authState});
      // console.log({authData});

      if (authState === AuthState.SignedIn) {
        console.log("user successfully signed in!");
        console.log("user data: ", authData);
      }
      if (!authData) {
        console.log("user is not signed in...");
      }

      this.authState = authState;
      this.user = authData;
    })
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
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
  beforeDestroy() {
    this.unsubscribeAuth();
  }
}
</script>
