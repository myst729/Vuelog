<template>
  <div class="page">
    <vuelog-renderer class="page-body" :type="'page'" :metadata="page"></vuelog-renderer>
    <vuelog-comments v-if="!page.commentless" :path="$route.fullPath"></vuelog-comments>
  </div>
</template>

<script>
  import VuelogRenderer from '../components/VuelogRenderer'
  import VuelogComments from '../components/VuelogComments'

  export default {
    name: 'vuelog-page',

    components: {
      VuelogRenderer,
      VuelogComments
    },

    computed: {
      config () {
        return this.$store.getters.config
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
      this.$store.dispatch('documentTitle', this.page.title)
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
