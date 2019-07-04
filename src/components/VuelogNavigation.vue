<template>
  <div class="navigation">
    <div class="prev" v-if="prev">
      <router-link :to="prev.route" v-text="i18nify(prev.label)"></router-link>
    </div>
    <div class="next" v-if="next">
      <router-link :to="next.route" v-text="i18nify(next.label)"></router-link>
    </div>
  </div>
</template>

<script>
import { retrieveByLanguage } from '../utils'

export default {
  name: 'vuelog-navigation',

  props: ['prev', 'next'],

  computed: {
    active () {
      return this.$store.getters.lang
    },

    config () {
      return this.$store.getters.config
    }
  },

  methods: {
    i18nify (content) {
      return retrieveByLanguage(content, this.active, this.config.defaultLang)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .navigation
    font-weight 600
    padding-top 5px

  .prev
    padding-top 5px
    float left

    &:before
      content '\2190 '

  .next
    padding-top 5px
    float right

    &:after
      content ' \2192'
</style>
