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
                  <button @click="postMonologue" class="button">Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-for="(row, i) in posts" v-bind:key="i" class="card my-3">
          <div class="card-content">
            <div class="content">
              <span v-html="row.post"></span>
            </div>
          </div>
          <div class="card-footer">
            <div class="card-footer-item is-small">
              <time :datetime="post.createdAt">{{ row.createdAt }}</time>
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
    }
  },
  created() {
    this.getAllMonologues();
  },
  methods: {
    async getAllMonologues() {
      const { data } = await axios.get(API_URL).catch(e => console.error(e));
      this.posts = data;
    },
    async postMonologue() {
      const res = await axios.post(API_URL,
                                  {
                                    post: this.post.text
                                  })
                             .catch(e => { console.error(e) });

      if (res.data) {
        this.post.text = "";
        this.getAllMonologues();
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
