<template>
  <div class="content">
    <vuelog-post :database="database" :excerpt="false" :path="path"></vuelog-post>
    <div class="pagination">
      <a :class="{invisible: !prev}" v-link="{path: prev}" class="left">&lt;&lt; Previous</a>
      <a :class="{invisible: !next}" v-link="{path: next}" class="right">Next &gt;&gt;</a>
    </div>
  </div>
</template>

<script>
  import VuelogPost from './VuelogPost'

  export default {
    components: {
      VuelogPost
    },
    data () {
      return {
        path: '',
        prev: false,
        next: false
      }
    },
    props: ['database'],
    methods: {
      updatePagination (to) {
        if (!to.params || !to.params.year || !to.params.title) {
          // not a post in timeline
          return
        }

        var sitemap = this.database.sitemap
        var all
        var selfIndex

        this.category = to.path.replace(/^(\/[^\/]+)\/.+/, ($, $1) => $1)
        for (var i = 0; i < sitemap.length; i++) {
          if (sitemap[i].type === 'category' && sitemap[i].path === this.category) {
            all = sitemap[i].children
            selfIndex = all.indexOf(to.path)
            this.prev = selfIndex > 0 ? all[selfIndex - 1] : false
            this.next = selfIndex < all.length - 1 ? all[selfIndex + 1] : false
            break
          }
        }
      },
      updatePost (to) {
        this.path = to.path
      }
    },
    route: {
      data (transition) {
        this.updatePagination(transition.to)
        this.updatePost(transition.to)
        transition.next()
      }
    }
  }
</script>
