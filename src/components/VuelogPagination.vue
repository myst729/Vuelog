<template>
  <div class="pagination">
    <div class="prev" v-if="prev">
      <router-link :to="prev.route" v-text="prev.label"></router-link>
    </div>
    <div class="next" v-if="next">
      <router-link :to="next.route" v-text="next.label"></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vuelog-pagination',

    props: ['prev', 'next']
  }
</script>

<style lang="stylus" scoped>
  .pagination
    font-weight 600
    padding-top 5px

  .prev
    padding-top 5px
    float left

    &:before
      content '\2190 '

  .next
    padding-top 5px
    float right

    &:after
      content ' \2192'
</style>
