<template>
  <div class="post">
    <h1 class="post-title" v-text="posts.current.title"></h1>
    <vuelog-content class="post-body" :type="'post'" :metadata="posts.current" :markdown="posts.current.markdown" :navs="posts"></vuelog-content>
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
      posts () {
        const category = this.$route.params.category
        const slug = this.$route.params.slug
        const year = +this.$route.params.year
        const posts = this.$store.getters.posts

        for (var i = 0; i < posts.length; i++) {
          if (posts[i].category === category && posts[i].year === year && posts[i].slug === slug) {
            const siblings = this.getSiblings(posts, i)
            return {
              current: posts[i],
              prev: siblings.prev,
              next: siblings.next
            }
          }
        }
        this.oops()
      }
    },

    methods: {
      oops () {
        this.$router.replace('/oops')
      },

      getSiblings (posts, i) {
        const prev = (i - 1 < 0) ? null : posts[i - 1]
        const next = (i + 1 < posts.length) ? posts[i + 1] : null

        return {
          prev: prev ? {
            label: '&laquo; ' + prev.title,
            route: {name: 'post', params: prev}
          } : null,
          next: next ? {
            label: next.title + ' &raquo;',
            route: {name: 'post', params: next}
          } : null
        }
      }
    },

    created () {
      this.$store.dispatch('DOCUMENT_TITLE', this.posts.current.title)
    }
  }
</script>

<style lang="stylus" scoped>
  .post
  .post-body
    flex 1
    display flex
    flex-direction column

  .post-title
    color #34495e
</style>
