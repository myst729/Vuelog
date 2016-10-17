<template>
  <div class="oops">
    <h1>Oops!</h1>
    <p>The page you were looking for doesn't exist.</p>
    <router-link class="button" to="/">Take Me Home</router-link>
  </div>
</template>

<script>
  export default {
    name: 'vuelog-oops-view'
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
