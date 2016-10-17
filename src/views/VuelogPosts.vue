<template>
  <div class="posts">
    <div class="posts-wrap" v-for="">
      <h2 v-text="post.title"></h2>
      <vuelog-content class="post-body" :type="$route.name" :metadata="post" :markdown="post.markdown"></vuelog-content>
    </div>
    <div>TODO: pagination</div>
  </div>
</template>

<script>
  export default {
    name: 'vuelog-posts-view'
  }
</script>

<style lang="stylus" scoped>
//  .posts-body
//    padding 1em 0 2em
</style>
