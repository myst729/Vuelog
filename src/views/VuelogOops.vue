<template>
  <div class="oops">
    <h1 v-text="$t('oops.title')"></h1>
    <p v-text="$t('oops.description')"></p>
    <router-link class="button" to="/" v-text="$t('oops.tip')"></router-link>
  </div>
</template>

<script>
import { retrieveByLanguage } from '../utils'

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
      var title = this.$t('oops.title')
      var brand = retrieveByLanguage(this.config.brand, this.active, this.config.defaultLang)
      if (this.config.brandTrailing) {
        return title + ' | ' + brand
      } else {
        return brand + ' | ' + title
      }
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
