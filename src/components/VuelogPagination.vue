<template>
  <div class="pagination">
    <div class="prev" v-if="prev">
      <router-link :to="prev.route" v-html="prev.label"></router-link>
    </div>
    <div class="next" v-if="next">
      <router-link :to="next.route" v-html="next.label"></router-link>
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

  .next
    padding-top 5px
    float right
</style>
