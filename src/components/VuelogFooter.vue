<template>
  <footer>Built with <span>&#10084;</span> and <a :href="sys.project" v-text="sys.name" target="_blank" rel="noopener noreferrer"></a></footer>
</template>

<script>
  export default {
    name: 'vuelog-footer',

    computed: {
      sys () {
        return this.$store.getters.system
      }
    }
  }
</script>

<style lang="stylus" scoped>
  footer
    border-top 1px solid #ddd
    color #7f8c8d
    font-size 15px
    font-weight 600
    width 960px
    padding 20px 0
    text-align center

  span
    color #f66

  a:hover
    text-decoration none
</style>
