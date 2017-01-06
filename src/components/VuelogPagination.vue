<template>
  <div class="content-pagination">
    <span class="page-number" v-for="(part, index) in parts">
      <span v-if="index === active" v-text="index + 1"></span>
      <router-link v-if="index !== active" :to="part" v-text="index + 1"></router-link>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'vuelog-pagination',

    props: ['total', 'type'],

    computed: {
      routeName () {
        return `${this.type}-part`
      },

      parts () {
        var results = []
        for (var i = 1; i <= this.total; i++) {
          var part = {
            name: this.routeName,
            params: Object.assign({}, this.$route.params, { part: `${i}` }),
            query: this.$route.query
          }
          results.push(part)
        }
        return results
      },

      active () {
        return (this.$route.params.part || 1) - 1
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .content-pagination
    text-align center
    padding 10px 0

  .page-number
    display inline-block
    margin 0 5px

    a
    span
      border 1px solid #4fc08d
      border-radius 2em
      line-height 30px
      text-align center
      text-decoration none
      display inline-block
      height 32px
      width 32px

    a
      background #fff
      color #4fc08d

      &:hover
        background #fcfcfc
        color #5dc596

    span
      background #4fc08d
      color #fff

  @media screen and (max-width: 999px)
    .page-number
      a
      span
        line-height 34px
        height 36px
        width 36px
</style>
