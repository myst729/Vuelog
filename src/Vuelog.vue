<template>
  <div class="vuelog" :class="'vuelog-view-' + $route.name">
    <vuelog-header></vuelog-header>
    <div class="vuelog-body">
      <transition name="view" mode="out-in" @before-leave="closeSideMenu" @before-enter="resetScroll" appear>
        <router-view :key="routeKey"></router-view>
      </transition>
    </div>
    <vuelog-footer v-if="!isHomepage"></vuelog-footer>
  </div>
</template>

<script>
  import setLocale from './i18n'
  import VuelogHeader from './components/VuelogHeader'
  import VuelogFooter from './components/VuelogFooter'

  export default {
    name: 'vuelog',

    components: {
      VuelogHeader,
      VuelogFooter
    },

    computed: {
      lang () {
        return this.$store.getters.lang
      },

      title () {
        return this.$store.getters.title
      },

      isHomepage () {
        return this.$route.name === 'home'
      },

      routeKey () {
        // Avoid router-view reload when routing from one part to another in a multiple parts page or post.
        var path = this.$route.path.replace(/\/$/, '')
        if (this.$route.name === 'page-part' || this.$route.name === 'post-part') {
          // By removing the `part` param, different parts of a multiple parts page or post will share the same key.
          return path.replace(/\/\d+$/, '')
        }
        return path
      }
    },

    metaInfo () {
      return {
        title: this.title,
        htmlAttrs: {
          lang: this.lang.substring(0, 2)
        }
      }
    },

    methods: {
      closeSideMenu () {
        this.$store.dispatch('sideMenu', false)
      },

      setLanguage (lang) {
        this.$store.dispatch('systemLanguage', lang)
        setLocale(lang)
      },

      resetScroll () {
        window.scrollTo(0, 0)
      }
    },

    created () {
      if (this.$route.query.lang) {
        this.setLanguage(this.$route.query.lang)
      }
    },

    watch: {
      $route (to, from) {
        if (to.query.lang !== from.query.lang) {
          this.setLanguage(to.query.lang)
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import './assets/styles/global';
</style>

<style lang="stylus" scoped>
  .vuelog
    min-height 100%
    display flex
    flex-direction column
    align-items center

  .vuelog-body
    flex 1
    display flex
    flex-direction column
    padding 100px 30px 15px
    width 100%
    max-width 900px

  .view-enter-active
  .view-leave-active
    transition opacity .3s ease

  .view-enter
  .view-leave-active
    opacity 0

  @media screen and (max-width: 1059px)
    .vuelog-body
      padding-top 60px

  @media screen and (max-width: 999px)
    .vuelog-body
      padding-top 50px
      padding-bottom 15px

    .vuelog-view-home .vuelog-body
      padding-top 20px
      padding-bottom 0
</style>
