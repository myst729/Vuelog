<template>
  <div>
    <label v-text="$t('lang.switch')"></label>
    <select v-model="selected" @change="switchLanguage">
      <option v-for="(value, key) in languages" :key="key" :value="key" v-text="value"></option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'vuelog-language',

  computed: {
    active () {
      return this.$store.getters.lang
    },

    languages () {
      return this.$store.getters.languages
    }
  },

  data () {
    return {
      selected: ''
    }
  },

  methods: {
    switchLanguage () {
      this.$router.push({
        name: this.$route.name,
        params: this.$route.params,
        query: Object.assign({}, this.$route.query, { lang: this.selected })
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
