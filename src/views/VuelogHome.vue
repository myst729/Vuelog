<template>
  <div class="home">
    <img :src="sys.logo">
    <h1 v-text="sys.name"></h1>
    <p class="description" v-text="sys.description"></p>
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
    padding-top 75px
    text-align center

  img
    display inline-block
    width 240px

  h1
    font-family 'Dosis', 'Source Sans Pro', 'PingFang SC', 'Microsoft Yahei', 'Helvetica Neue', Helvetica, Arial, sans-serif
    font-weight 300
    font-size 60px
    margin-top 12px
    margin-bottom 40px

  .description
    color #7f8c8d
    margin-bottom 24px
</style>
