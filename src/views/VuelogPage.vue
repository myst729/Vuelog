<template>
  <div class="page">
    <vuelog-renderer class="page-body" :type="'page'" :metadata="page"></vuelog-renderer>
    <vuelog-comments v-if="!page.commentless" :path="$route.fullPath"></vuelog-comments>
  </div>
</template>

<script>
import { retrieveByLanguage } from '../utils'
import VuelogRenderer from '../components/VuelogRenderer'
import VuelogComments from '../components/VuelogComments'

export default {
  name: 'vuelog-page',

  components: {
    VuelogRenderer,
    VuelogComments
  },

  computed: {
    active () {
      return this.$store.getters.lang
    },

    config () {
      return this.$store.getters.config
    },

    title () {
      var title = retrieveByLanguage(this.page.title, this.active, this.config.defaultLang)
      var brand = retrieveByLanguage(this.config.brand, this.active, this.config.defaultLang)
      if (this.config.brandTrailing) {
        return title + ' | ' + brand
      } else {
        return brand + ' | ' + title
      }
    },

    page () {
      const pages = this.$store.getters.pages
      for (var i = 0; i < pages.length; i++) {
        if (pages[i].slug === this.$route.params.page) {
          return pages[i]
        }
      }
      this.oops()
      return { markdown: '', slug: '', title: '' }
    }
  },

  methods: {
    oops () {
      this.$router.replace('/oops')
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
  .page
  .page-body
    flex 1
    display flex
    flex-direction column
</style>
