<template>
  <div class="vuelog">
    <vuelog-header></vuelog-header>
    <div class="vuelog-body">
      <transition name="view" mode="out-in" @before-enter="resetScroll" appear>
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
      isHomepage () {
        return this.$route.name === 'home'
      }
    },

    methods: {
      resetScroll () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>

<style lang="stylus">
  @import './assets/styles/fonts.css';
  @import './assets/styles/global';
  @import './assets/styles/content';
  @import './assets/styles/highlight';
</style>

<style lang="stylus" scoped>
  .vuelog
    min-height 100vh
    display flex
    flex-direction column
    align-items center

  .vuelog-body
    flex 1
    display flex
    flex-direction column
    padding 100px 0 15px
    width 840px

  .view-enter-active
  .view-leave-active
    transition opacity .3s ease

  .view-enter
  .view-leave-active
    opacity 0
</style>
