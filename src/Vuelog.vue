<template>
  <div class="vuelog">
    <vuelog-header></vuelog-header>
    <transition name="view" mode="out-in" appear>
      <router-view class="view"></router-view>
    </transition>
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
    }
  }
</script>

<style lang="stylus">
  @import './assets/styles/fonts.css';
  @import './assets/styles/global';

  .vuelog
    min-height 100vh
    display flex
    flex-direction column
    align-items center

  .view
    flex 1
    padding 100px 0 10px
    width 900px
    will-change opacity

  .view-enter-active
  .view-leave-active
    transition opacity .3s ease

  .view-enter
  .view-leave-active
    opacity 0
</style>
