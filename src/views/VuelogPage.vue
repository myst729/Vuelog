<template>
  <div class="page">
    <vuelog-content class="page-body" :type="'page'" :metadata="page"></vuelog-content>
    <vue-disqus class="comments" v-if="config.disqusShortname && !page.commentless" :shortname="config.disqusShortname"></vue-disqus>
  </div>
</template>

<script>
  import VueDisqus from 'vue-disqus'
  import VuelogContent from '../components/VuelogContent'

  export default {
    name: 'vuelog-page-view',

    components: {
      VueDisqus,
      VuelogContent
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

  .comments
    padding-bottom 10px
</style>
