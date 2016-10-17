<template>
  <div class="page">
    <h1 v-text="page.title"></h1>
    <vuelog-content class="page-body" :type="'page'" :metadata="page" :markdown="page.markdown"></vuelog-content>
  </div>
</template>

<script>
  import VuelogContent from '../components/VuelogContent'

  export default {
    name: 'vuelog-page-view',

    components: {
      VuelogContent
    },

    computed: {
      page () {
        const pages = this.$store.getters.pages
        for (var i = 0; i < pages.length; i++) {
          if (pages[i].slug === this.$route.params.page) {
            return pages[i]
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
      this.$store.dispatch('DOCUMENT_TITLE', this.page.title)
    }
  }
</script>

<style lang="stylus" scoped>
//  .page-body
//    padding 1em 0 2em
</style>
