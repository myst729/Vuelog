<template>
  <div class="posts">
    <div class="posts-body">
      <div class="post" v-for="post in dataset.posts">
        <vuelog-content class="post-body" :type="'posts'" :metadata="post"></vuelog-content>
      </div>
    </div>
    <vuelog-pagination :prev="dataset.prev" :next="dataset.next"></vuelog-pagination>
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

    computed: {
      dataset () {
        const category = /category/.test(this.$route.name) && this.$route.params.category
        const collection = this.getAllPosts(category)
        const p = /-more/.test(this.$route.name) ? +this.$route.params.p : 1
        const postsCount = this.$store.getters.config.postsCount
        const posts = this.getPosts(collection.posts, p, postsCount)
        const siblings = this.getSiblings(p, Math.ceil(collection.posts.length / postsCount), category)
        return {
          posts,
          current: { p, label: category ? collection.title : 'Blog' },
          prev: siblings.prev,
          next: siblings.next
        }
      }
    },

    methods: {
      oops () {
        this.$router.replace('/oops')
      },

      getPosts (allPosts, p, postsCount) {
        const start = (p - 1) * postsCount
        if (start >= 0 && start < allPosts.length) {
          return allPosts.slice(start, start + postsCount)
        }
        this.oops()
        return []
      },

      getAllPosts (category) {
        if (category) {
          return this.getPostsInCategory(this.$store.getters.postsByCategory, category)
        } else {
          return { posts: this.$store.getters.posts }
        }
      },

      getPostsInCategory (postsByCategory, slug) {
        for (var i = 0; i < postsByCategory.length; i++) {
          if (postsByCategory[i].slug === slug) {
            return postsByCategory[i]
          }
        }
        this.oops()
        return { posts: [], slug: '', title: '' }
      },

      getSiblings (p, total, category) {
        const prevP = (p > 1) ? p - 1 : null
        const nextP = (p < total) ? p + 1 : null
        var prevRoute = null
        var nextRoute = null

        if (prevP === 1) {
          prevRoute = category ? { name: 'category', params: { category } } : { name: 'posts' }
        } else if (prevP) {
          prevRoute = category ? { name: 'category-more', params: { category, p: prevP } } : { name: 'posts-more', params: { p: prevP } }
        }
        if (nextP) {
          nextRoute = category ? { name: 'category-more', params: { category, p: nextP } } : { name: 'posts-more', params: { p: nextP } }
        }

        return {
          prev: prevRoute && { label: '&laquo; Prev', route: prevRoute },
          next: nextRoute && { label: 'Next &raquo;', route: nextRoute }
        }
      }
    },

    created () {
      const current = this.dataset.current
      var label = current.label
      if (current.p > 1) {
        label += ` | ${current.p}`
      }
      this.$store.dispatch('DOCUMENT_TITLE', label)
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

  .post
    margin-bottom 20px
</style>