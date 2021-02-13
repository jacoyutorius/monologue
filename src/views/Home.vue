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

        <div v-for="(post, i) in posts" v-bind:key="i" class="card my-3">
          <div class="card-content">
            <div class="content">
              {{ post.text }}
            </div>
          </div>
          <div class="card-footer">
            <div class="card-footer-item is-small">
              <time :datetime="post.created_at">{{ post.created_at }}</time>
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

      </div>
    </div>

    <div class="container column is-5">
    </div>
  </section>
</template>

<script>
const BASE_ROW = 2;

export default {
  name: 'Home',
  data() {
    return {
      post: {
        text: ""
      },
      posts: [
        {
          text: "「サビ男サビ女」という毒にも薬にもならないような映画を観ている",
          created_at: "2021-02-12T18:12:59.435Z",
          key_phrases: [
            {
              score: 0.9999999403953552,
              text: "サビ男サビ女」という毒にも薬",
              begin_offset: 1,
              end_offset: 15
            },
            {
              score: 1,
              text: "映画",
              begin_offset: 24,
              end_offset: 26
            }
          ]
        },
        {
          text: "在庫復活したっぽいのでポチってしまった。何ができるのかもよくわかってないし、何をしたいのかも決めてない > M5Stack Core2 for AWS - ESP32 IoT開発キット - スイッチサイエンス",
          created_at: "2021-02-12T18:13:07.958Z",
          key_phrases: [
            {
              score: 0.6505729556083679,
              type: "COMMERCIAL_ITEM",
              text: "M5Stack",
              begin_offset: 54,
              end_offset: 61
            },
            {
              score: 0.691093921661377,
              type: "TITLE",
              text: "Core2",
              begin_offset: 62,
              end_offset: 67
            },
            {
              score: 0.43248245120048523,
              type: "TITLE",
              text: "AWS",
              begin_offset: 72,
              end_offset: 75
            },
            {
              score: 0.5308316946029663,
              type: "TITLE",
              text: "ESP32",
              begin_offset: 78,
              end_offset: 83
            },
            {
              score: 0.41701817512512207,
              type: "TITLE",
              text: "スイッチ",
              begin_offset: 95,
              end_offset: 99
            }
          ]
        }
      ]
    };
  },
  computed: {
    lineRows() {
      return BASE_ROW + this.post.text.split("").filter(v => v === "\n").length;
    }
  }
}
</script>
