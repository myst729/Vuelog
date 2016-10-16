<template>
  <div class="content">
    <transition name="loading" mode="out-in" appear>
      <vuelog-spinner v-if="!content" key="spinner" class="spinner"></vuelog-spinner>
      <div v-if="content" key="content" class="content-body">Vuelog Content (TODO): {{type}} - {{content}}</div>
    </transition>
  </div>
</template>

<script>
  import VuelogSpinner from './VuelogSpinner'

  export default {
    name: 'vuelog-content',

    props: ['type', 'slug'],

    components: {
      VuelogSpinner
    },

    data () {
      return {
        content: null,
        loading: null
      }
    },

    methods: {
      loadContent (slug) {
        var self = this
        this.content = null
        clearTimeout(this.loading)
        this.loading = setTimeout(function () {
          self.content = slug
          console.log(1)
        }, 2000)
      }
    },

    created () {
      console.log('created')
      this.loadContent(this.slug)
    },

    watch: {
      slug (newVal, oldVal) {
        if (newVal && newVal !== oldVal) {
          this.loadContent(newVal)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .spinner
    display block
    margin: 100px auto 0

  .spinner
  .content-body
    will-change opacity

  .loading-enter-active
  .loading-leave-active
    transition opacity .3s ease

  .loading-enter
  .loading-leave-active
    opacity 0
</style>
