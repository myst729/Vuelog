<template>
  <div class="oops">
    <h1 v-text="$t('oops.title')"></h1>
    <p v-text="$t('oops.description')"></p>
    <router-link class="button" to="/" v-text="$t('oops.tip')"></router-link>
  </div>
</template>

<script>
  export default {
    name: 'vuelog-oops',

    created () {
      this.$store.dispatch('documentTitle', this.$t('oops.title'))
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
