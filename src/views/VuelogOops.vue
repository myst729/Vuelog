<template>
  <div class="oops">
    <h1 v-text="$t('oops.heading')"></h1>
    <p v-text="$t('oops.description')"></p>
    <router-link class="button" to="/" v-text="$t('oops.tip')"></router-link>
  </div>
</template>

<script>
  export default {
    name: 'vuelog-oops-view',

    created () {
      this.$store.dispatch('DOCUMENT_TITLE', 'Oops!')
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
