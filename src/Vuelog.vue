<template>
  <div class="vuelog">
    <vuelog-header></vuelog-header>
    <transition name="fade" mode="out-in">
      <router-view class="router-view"></router-view>
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

  .router-view
    flex 1
</style>
