<template>
  <div class="post">
    <vuelog-content class="post-body" :type="'post'" :metadata="dataset.post"></vuelog-content>
    <vuelog-comments v-if="!dataset.post.commentless" :path="$route.fullPath"></vuelog-comments>
    <vuelog-pagination :prev="dataset.prev" :next="dataset.next"></vuelog-pagination>
  </div>
</template>

<script>
  import VuelogContent from '../components/VuelogContent'
  import VuelogComments from '../components/VuelogComments'
  import VuelogPagination from '../components/VuelogPagination'

  export default {
    name: 'vuelog-post-view',

    components: {
      VuelogContent,
      VuelogComments,
      VuelogPagination
    },

    computed: {
      config () {
        return this.$store.getters.config
      },

      dataset () {
        const category = this.$route.params.category
        const slug = this.$route.params.slug
        const year = +this.$route.params.year
        const posts = this.$store.getters.posts

        for (var i = 0; i < posts.length; i++) {
          if (posts[i].category === category && posts[i].year === year && posts[i].slug === slug) {
            const siblings = this.getSiblings(posts, i)
            return {
              post: posts[i],
              prev: siblings.prev,
              next: siblings.next
            }
          }
        }
        this.oops()
        return { post: { category, slug, year, title: '', date: '', markdown: '', categoryTitle: '' }, prev: null, next: null }
      }
    },

    methods: {
      oops () {
        this.$router.replace('/oops')
      },

      getSiblings (posts, i) {
        const prevParams = (i - 1 < 0) ? null : posts[i - 1]
        const nextParams = (i + 1 < posts.length) ? posts[i + 1] : null

        return {
          prev: prevParams && { label: prevParams.title, route: {name: 'post', params: prevParams} },
          next: nextParams && { label: nextParams.title, route: {name: 'post', params: nextParams} }
        }
      }
    },

    created () {
      this.$store.dispatch('DOCUMENT_TITLE', this.dataset.post.title)
    }
  }
</script>

<style lang="stylus" scoped>
  .post
  .post-body
    flex 1
    display flex
    flex-direction column
</style>
