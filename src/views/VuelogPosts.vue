<template>
  <div class="posts">
    <div class="post" v-for="">
      <h2 v-text="post.title"></h2>
      <vuelog-content class="post-body" :type="'posts'" :metadata="post" :markdown="post.markdown"></vuelog-content>
    </div>
    <div>TODO: pagination</div>
  </div>
</template>

<script>
  export default {
    name: 'vuelog-posts-view',

    methods: {
      oops () {
        this.$router.replace('/oops')
      }
    },

    created () {
      this.$store.dispatch('DOCUMENT_TITLE', 'Blog') // Blog | 2, categoryTitle, categoryTitle | 2
    }
  }
</script>

<style lang="stylus" scoped>
//  .posts-body
//    padding 1em 0 2em
</style>
