<template>
  <div class="oops">
    <h1 v-text="$t('oops.title')"></h1>
    <p v-text="$t('oops.description')"></p>
    <router-link class="button" to="/" v-text="$t('oops.tip')"></router-link>
  </div>
</template>

<script>
  import { retrieveByLanguage } from '../helpers'

  export default {
    name: 'vuelog-oops',

    computed: {
      active () {
        return this.$store.getters.lang
      },

      config () {
        return this.$store.getters.config
      },

      title () {
        return retrieveByLanguage(this.config.brand, this.active, this.config.defaultLang) + ' | ' + this.$t('oops.title')
      }
    },

    created () {
      this.$store.dispatch('documentTitle', this.title)
    },

    watch: {
      $route (to, from) {
        if (to.query.lang !== from.query.lang) {
          this.$store.dispatch('documentTitle', this.title)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .oops
    text-align center

  h1
    font-size 100px

  p
    font-size 28px
</style>
