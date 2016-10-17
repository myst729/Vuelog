<template>
  <div class="post">
    <h1 v-text="post.title"></h1>
    <vuelog-content class="post-body" :type="'post'" :metadata="post" :markdown="post.markdown"></vuelog-content>
    <div>TODO: pagination</div>
  </div>
</template>

<script>
  import VuelogContent from '../components/VuelogContent'

  export default {
    name: 'vuelog-post-view',

    components: {
      VuelogContent
    },

    computed: {
      post () {
        const year = this.$route.params.year
        var posts = this.$store.getters.postsByYear
        for (var i = 0; i < posts.length; i++) {
          if (posts[i].year === year) {
            posts = posts[i].posts
            for (var j = 0; i < posts.length; j++) {
              if (posts[j].slug === this.$route.params.post) {
                return posts[j]
              }
            }
          }
        }
        this.oops()
      }
    },

    methods: {
      oops () {
        this.$router.replace('/oops')
      }
    },

    created () {
      this.$store.dispatch('DOCUMENT_TITLE', this.post.title)
    }
  }
</script>

<style lang="stylus" scoped>
//  .post-body
//    padding 1em 0 2em
</style>
