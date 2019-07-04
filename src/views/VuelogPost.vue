<template>
  <div class="post">
    <vuelog-renderer class="post-body" :type="'post'" :metadata="dataset.post"></vuelog-renderer>
    <vuelog-comments v-if="!dataset.post.commentless" :path="$route.fullPath" key="active"></vuelog-comments>
    <transition name="fade" mode="out-in">
      <vuelog-navigation :prev="dataset.prev" :next="dataset.next" :key="active"></vuelog-navigation>
    </transition>
  </div>
</template>

<script>
import { retrieveByLanguage } from '../utils'
import VuelogRenderer from '../components/VuelogRenderer'
import VuelogComments from '../components/VuelogComments'
import VuelogNavigation from '../components/VuelogNavigation'

export default {
  name: 'vuelog-post',

  components: {
    VuelogRenderer,
    VuelogComments,
    VuelogNavigation
  },

  computed: {
    active () {
      return this.$store.getters.lang
    },

    config () {
      return this.$store.getters.config
    },

    title () {
      var title = retrieveByLanguage(this.dataset.post.title, this.active, this.config.defaultLang)
      var brand = retrieveByLanguage(this.config.brand, this.active, this.config.defaultLang)
      if (this.config.brandTrailing) {
        return title + ' | ' + brand
      } else {
        return brand + ' | ' + title
      }
    },

    dataset () {
      const category = this.$route.params.category
      const slug = this.$route.params.slug
      const year = +this.$route.params.year
      const posts = this.$store.getters.posts

      for (var i = 0; i < posts.length; i++) {
        if (posts[i].category === category && posts[i].year === year && posts[i].slug === slug) {
          const siblings = this.getSiblings(posts, i)
          return {
            post: posts[i],
            prev: siblings.prev,
            next: siblings.next
          }
        }
      }
      this.oops()
      return { post: { category, slug, year, title: '', date: '', markdown: '', categoryTitle: '' }, prev: null, next: null }
    }
  },

  methods: {
    oops () {
      this.$router.replace('/oops')
    },

    getSiblings (posts, i) {
      const prevParams = (i - 1 < 0) ? null : posts[i - 1]
      const nextParams = (i + 1 < posts.length) ? posts[i + 1] : null

      return {
        prev: prevParams && { label: prevParams.title, route: { name: 'post', params: prevParams } },
        next: nextParams && { label: nextParams.title, route: { name: 'post', params: nextParams } }
      }
    }
  },

  created () {
    this.$store.dispatch('documentTitle', this.title)
  },

  watch: {
    $route (to, from) {
      if (to.query.lang !== from.query.lang) {
        this.$store.dispatch('documentTitle', this.title)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .post
  .post-body
    flex 1
    display flex
    flex-direction column
</style>
