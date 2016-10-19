<template>
  <div class="home">
    <img src="../assets/img/logo-256.svg">
    <h1 v-text="sys.name"></h1>
    <p v-text="sys.description"></p>
    <a class="button" :href="sys.release" v-text="'Download v' + sys.version" target="_blank" rel="noopener noreferrer"></a>
    <a class="button github" :href="sys.project" target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>
</template>

<script>
  export default {
    name: 'vuelog-home-view',

    computed: {
      sys () {
        return this.$store.getters.system
      }
    },

    created () {
      this.$store.dispatch('DOCUMENT_TITLE', false)
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    text-align center

  img
    display inline-block
    margin-top 75px

  h1
    font-family 'Dosis', 'Source Sans Pro', 'PingFang SC', 'Microsoft Yahei', 'Helvetica Neue', Helvetica, Arial, sans-serif
    font-weight 300
    font-size 60px
    margin-top 16px
    margin-bottom 36px

  p
    color #7f8c8d
    font-size 20px
    margin-bottom 24px

  .github
    background #fff
    color #4fc08d

    &:hover
      background #fcfcfc
      color #5dc596

  @media screen and (max-width: 999px)
    img
      margin-top 30px

    h1
      margin-top 10px
      margin-bottom 20px

    p
      margin-bottom 10px
</style>
