<template>
  <div>
    <label v-text="$t('lang.switch')"></label>
    <select v-model="selected" @change="switchLang">
      <option v-for="lang in langs" :value="lang" v-text="$t('lang.' + lang)"></option>
    </select>
  </div>
</template>

<script>
  import { langs } from '../i18n'

  export default {
    name: 'vuelog-language',

    computed: {
      active () {
        return this.$store.getters.lang
      }
    },

    data () {
      return {
        langs,
        selected: ''
      }
    },

    methods: {
      switchLang () {
        this.$router.push({
          name: this.$route.name,
          params: this.$route.params,
          query: { lang: this.selected }
        })
      }
    },

    created () {
      this.selected = this.active
    }
  }
</script>

<style lang="stylus" scoped>
  label
    font-size .8em

  @media screen and (max-width: 999px)
    label
      display none
</style>
