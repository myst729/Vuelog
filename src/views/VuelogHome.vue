<template>
  <div class="home">
    <img src="../assets/img/logo.svg">
    <h1 v-text="sys.name"></h1>
    <p v-text="sys.description"></p>
    <a class="button" :href="sys.release" v-text="'Download v' + sys.version" target="_blank" rel="noopener noreferrer"></a>
  </div>
</template>

<script>
  export default {
    name: 'vuelog-home-view',

    computed: {
      sys () {
        return this.$store.getters.system
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    text-align center

  img
    display inline-block
    margin-top 75px
    width 240px

  h1
    font-family 'Dosis', 'Source Sans Pro', 'PingFang SC', 'Microsoft Yahei', 'Helvetica Neue', Helvetica, Arial, sans-serif
    font-weight 300
    font-size 60px
    margin-top 16px
    margin-bottom 36px

  p
    color #7f8c8d
    font-size 18px
    margin-bottom 24px
</style>
