<template>
  <div class="page">
    <vuelog-content class="page-body" :type="'page'" :metadata="page"></vuelog-content>
    <vuelog-comments v-if="!page.commentless" :path="$route.fullPath"></vuelog-comments>
  </div>
</template>

<script>
  import VuelogContent from '../components/VuelogContent'
  import VuelogComments from '../components/VuelogComments'

  export default {
    name: 'vuelog-page-view',

    components: {
      VuelogContent,
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
      this.$store.dispatch('DOCUMENT_TITLE', this.page.title)
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
