<template>
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
      <div class="home">
        <div class="card my-3">
          <div class="card-content">
            <div class="content">
              <div class="field">
                <div class="control">
                  <textarea
                    v-model="post.text"
                    :rows="lineRows"
                    class="textarea"
                    placeholder="Textarea">
                  </textarea>
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

        <div v-for="(row, i) in displayRows" v-bind:key="i" class="card my-3">
          <div class="card-content">
            <div class="content">
              <span v-html="row.post"></span>
            </div>
          </div>
          <div class="card-footer">
            <div class="card-footer-item is-small">
              <time :datetime="post.timestamp">{{ row.timestamp }}</time>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container column is-5">
    </div>
  </section>
</template>

<script>
import axios from "axios";

axios.defaults.headers.common['x-api-key'] = "ZgCQeedx4J8kCopzJGhz06l1ijD55A2U7TohXsFx";
axios.defaults.withCredentials = true

const BASE_ROW = 2;
const API_URL = "https://0esn29r6vk.execute-api.ap-northeast-1.amazonaws.com/develop";

export default {
  name: 'Home',
  data() {
    return {
      post: {
        text: ""
      },
      posts: []
    };
  },
  computed: {
    lineRows() {
      return BASE_ROW + this.post.text.split("").filter(v => v === "\n").length;
    },
    displayRows() {
      return this.posts.map(row => {     
        let str = row.post.S;

        row.keyphrases.L.forEach(v => {
          try {
            str = str.replaceAll(v.M.Text.S, "<a href='/' class='keyphrase'>" + v.M.Text.S + "</a>" )
          }
          catch (e) {
            console.error(e, v);
          }          
        });

        return {
          post: str,
          timestamp: row.timestamp.N
        };
      });
    }
  },
  async created() {
    const { data } = await this.getAllMonologues();
    this.posts = data;
  },
  methods: {
    getAllMonologues() {
      try {
        return axios.get(API_URL);
      }
      catch (e) {
        console.error(e);
        return {}
      }
    }
  }
}
</script>

<style>
a.keyphrase {
  text-decoration: underline dotted !important;
}
</style>
