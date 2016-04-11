<template>
  <div class="content">
    <div class="content-wrap">
      <vuelog-content :database="database" :record="record" :type="type" :excerpt="false"></vuelog-content>
    </div>

    <div class="pagination">
      <div class="prev" v-if="prev">
        <a v-text="'&laquo; ' + prev.title" v-link="{name: 'post', params: {category: prev.category, post: prev.slug, time: prev.routeTime}}"></a>
      </div>
      <div class="next" v-if="next">
        <a v-text="next.title + ' &raquo;'" v-link="{name: 'post', params: {category: next.category, post: next.slug, time: next.routeTime}}"></a>
      </div>
    </div>

    <div class="footer">
      <span>Built with <i>&#10084;</i> and <a :href="database.system.project" v-text="database.system.name"></a></span>
    </div>
  </div>
</template>

<script>
  import utils from '../utils.js'
  import VuelogContent from './VuelogContent'

  export default {
    components: {
      VuelogContent
    },

    props: ['database'],

    data () {
      return {
        record: {},
        type: 'post',
        prev: null,
        next: null
      }
    },

    methods: {
      getPostRecord (category, slug) {
        var posts = this.database.posts
        var categories = this.database.categories
        var routeTime = this.database.deployment.routeTime
        var displayTime = this.database.deployment.displayTime

        for (var i = 0; i < posts.length; i++) {
          if (posts[i].category === category && posts[i].slug === slug) {
            this.record = posts[i]
            this.record.displayTime = utils.formatTime(this.record.date, displayTime)
            this.record.routeTime = utils.formatTime(this.record.date, routeTime)

            if (i > 0) {
              this.prev = posts[i - 1]
              this.prev.routeTime = utils.formatTime(this.prev.date, routeTime)
            } else {
              this.prev = null
            }

            if (i < posts.length - 1) {
              this.next = posts[i + 1]
              this.next.routeTime = utils.formatTime(this.next.date, routeTime)
            } else {
              this.next = null
            }

            for (var j = 0; j < categories.length; j++) {
              if (categories[j].slug === category) {
                this.record.categoryTitle = categories[j].title
                return
              }
            }
          }
        }
      }
    },

    route: {
      data (transition) {
        var params = transition.to.params
        var category = (params && params.category)
        var slug = (params && params.post)
        this.getPostRecord(category, slug)

        transition.next()
      }
    }
  }
</script>
