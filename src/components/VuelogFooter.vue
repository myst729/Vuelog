<template>
  <footer>
    <div>
      <a :href="system.website" target="_blank" rel="noopener noreferrer" v-text="system.brand"></a> &amp; <span>&#10084;</span>
    </div>
    <vuelog-language class="lang" v-if="enableSwitch"></vuelog-language>
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
    enableSwitch () {
      var switchLang = this.$store.getters.config.switchLang
      var count = Object.keys(this.$store.getters.languages).length
      return switchLang && (count > 1)
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
