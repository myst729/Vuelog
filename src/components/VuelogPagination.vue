<template>
  <div class="content-pagination">
    <span class="page-number" v-for="(part, index) in parts" :key="index">
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
      return `${this.type}-more`
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
      border-radius 2em
      font-weight 500
      line-height 32px
      text-align center
      text-decoration none
      display inline-block
      height 32px
      width 32px

    a
      background #fff
      box-shadow inset 0 0 0 1px #4fc08d
      color #4fc08d

      &:hover
        background #fcfcfc
        color #5dc596

    span
      background #bdc3c7
      color #fff

  @media screen and (max-width: 999px)
    .page-number
      a
      span
        line-height 36px
        height 36px
        width 36px
</style>
