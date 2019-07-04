<template>
  <div class="posts">
    <div class="posts-body">
      <div class="post" v-for="(post, index) in dataset.posts" :key="index">
        <vuelog-renderer class="post-body" :type="'posts'" :metadata="post"></vuelog-renderer>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <vuelog-navigation :prev="dataset.prev" :next="dataset.next" :key="active"></vuelog-navigation>
    </transition>
  </div>
</template>

<script>
import { retrieveByLanguage } from '../utils'
import VuelogRenderer from '../components/VuelogRenderer'
import VuelogNavigation from '../components/VuelogNavigation'

export default {
  name: 'vuelog-posts',

  components: {
    VuelogRenderer,
    VuelogNavigation
  },

  computed: {
    dataset () {
      const category = /category/.test(this.$route.name) && this.$route.params.category
      const collection = this.getAllPosts(category)
      const p = /-more/.test(this.$route.name) ? +this.$route.params.p : 1
      const postsCount = this.$store.getters.config.postsCount
      const posts = this.getPosts(collection.posts, p, postsCount)
      const siblings = this.getSiblings(p, Math.ceil(collection.posts.length / postsCount), category)
      return {
        posts,
        current: { p, label: category ? collection.title : this.$t('reading.blog') },
        prev: siblings.prev,
        next: siblings.next
      }
    },

    active () {
      return this.$store.getters.lang
    },

    config () {
      return this.$store.getters.config
    },

    title () {
      const current = this.dataset.current
      var title = retrieveByLanguage(current.label, this.active, this.config.defaultLang)
      var brand = retrieveByLanguage(this.config.brand, this.active, this.config.defaultLang)
      if (current.p > 1) {
        title += ` | ${this.$t('reading.page', [current.p])}`
      }
      if (this.config.brandTrailing) {
        return title + ' | ' + brand
      } else {
        return brand + ' | ' + title
      }
    }
  },

  methods: {
    oops () {
      this.$router.replace('/oops')
    },

    getPosts (allPosts, p, postsCount) {
      const start = (p - 1) * postsCount
      if (start >= 0 && start < allPosts.length) {
        return allPosts.slice(start, start + postsCount)
      }
      this.oops()
      return []
    },

    getAllPosts (category) {
      if (category) {
        return this.getPostsInCategory(this.$store.getters.postsByCategory, category)
      } else {
        return { posts: this.$store.getters.posts }
      }
    },

    getPostsInCategory (postsByCategory, slug) {
      for (var i = 0; i < postsByCategory.length; i++) {
        if (postsByCategory[i].slug === slug) {
          return postsByCategory[i]
        }
      }
      this.oops()
      return { posts: [], slug: '', title: '' }
    },

    getSiblings (p, total, category) {
      const prevP = (p > 1) ? p - 1 : null
      const nextP = (p < total) ? p + 1 : null
      var prevRoute = null
      var nextRoute = null

      if (prevP === 1) {
        prevRoute = category ? { name: 'category', params: { category } } : { name: 'posts' }
      } else if (prevP) {
        prevRoute = category ? { name: 'category-more', params: { category, p: prevP } } : { name: 'posts-more', params: { p: prevP } }
      }
      if (nextP) {
        nextRoute = category ? { name: 'category-more', params: { category, p: nextP } } : { name: 'posts-more', params: { p: nextP } }
      }

      return {
        prev: prevRoute && { label: this.$t('reading.page', [prevP]), route: prevRoute },
        next: nextRoute && { label: this.$t('reading.page', [nextP]), route: nextRoute }
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
  .posts
    flex 1
    display flex
    flex-direction column

  .posts-body
    flex 1

  .post
    margin-bottom 20px
</style>
