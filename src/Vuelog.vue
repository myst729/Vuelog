<template>
  <div class="vuelog" :class="'vuelog-view-' + $route.name">
    <vuelog-header></vuelog-header>
    <div class="vuelog-body">
      <transition name="view" mode="out-in" @before-leave="closeSideMenu" @before-enter="resetScroll" appear>
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>
    <vuelog-footer v-if="!isHomepage"></vuelog-footer>
  </div>
</template>

<script>
  import VuelogHeader from './components/VuelogHeader'
  import VuelogFooter from './components/VuelogFooter'

  export default {
    components: {
      VuelogHeader,
      VuelogFooter
    },

    computed: {
      title () {
        return this.$store.getters.title
      },

      isHomepage () {
        return this.$route.name === 'home'
      }
    },

    methods: {
      closeSideMenu () {
        this.$store.dispatch('SIDE_MENU', false)
      },

      resetScroll () {
        window.scrollTo(0, 0)
      }
    },

    watch: {
      title (newVal, oldVal) {
        document.title = newVal
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
