<template>
  <footer>
    <div v-html="$t('credit', [$options._scopeId, system.project, system.name])"></div>
    <vuelog-language class="lang" v-if="config.switchLang"></vuelog-language>
  </footer>
</template>

<script>
  import VuelogLanguage from './VuelogLanguage'

  export default {
    name: 'vuelog-footer',

    components: {
      VuelogLanguage
    },

    computed: {
      config () {
        return this.$store.getters.config
      },

      system () {
        return this.$store.getters.system
      }
    }
  }
</script>

<style lang="stylus" scoped>
  footer
    border-top 1px solid #ddd
    color #7f8c8d
    font-size 15px
    font-weight 600
    width 900px
    padding 20px 0
    text-align center
    position relative

  span
    color #f66

  a:hover
    text-decoration none

  .lang
    position absolute
    right 10px
    top 20px

  @media screen and (max-width: 999px)
    footer
      padding 10px 20px
      width 100%

    div
      float left

    .lang
      position static
      float right
</style>
