<template>
  <div class="home">
    <img src="../assets/img/vuelog.svg">
    <h1 v-text="$t('home.name')"></h1>
    <p v-text="$t('home.description')"></p>
    <a class="button" :href="sys.release" v-text="$t('home.download', [sys.version])" target="_blank" rel="noopener noreferrer"></a>
    <a class="button github" :href="sys.project" target="_blank" rel="noopener noreferrer" v-text="$t('home.github')"></a>
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
      margin-top 10px

    h1
      margin-top 5px
      margin-bottom 10px

    p
      margin-top 0
      margin-bottom 10px

    .button
      margin-bottom .25em
</style>
