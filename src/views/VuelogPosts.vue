<template>
  <div class="posts">
    <div class="posts-body">
      <!-- TODO: post roll -->
      <div class="post" v-for="post in []">
        <h2 class="post-title" v-text="post.title"></h2>
        <vuelog-content class="post-body" :type="'posts'" :metadata="post" :markdown="post.markdown"></vuelog-content>
      </div>
    </div>
    <!-- TODO: pagination -->
    <!--
        <a v-if="prev === 1" v-link="{name: pathname, params: {category: category}}">&laquo; Prev</a>
        <a v-else v-link="{name: pathname + '-more', params: {category: category, p: prev}}">&laquo; Prev</a>
        <a v-link="{name: pathname + '-more', params: {category: category, p: next}}">Next &raquo;</a>
    -->
    <vuelog-pagination :prev="{route: '/', label: '&laquo; Previous Page'}" :next="{route: '/', label: 'Next Page &raquo;'}"></vuelog-pagination>
  </div>
</template>

<script>
  import VuelogContent from '../components/VuelogContent'
  import VuelogPagination from '../components/VuelogPagination'

  export default {
    name: 'vuelog-posts-view',

    components: {
      VuelogContent,
      VuelogPagination
    },

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
  .posts
    flex 1
    display flex
    flex-direction column

  .posts-body
    flex 1

  .post-title
  .post-title a
    color #34495e

  .post-title a:hover
    border-bottom: 2px solid #4fc08d
</style>
