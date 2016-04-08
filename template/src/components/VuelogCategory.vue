<template>
  <div class="content">
    <vuelog-post v-for="path in paths" track-by="$index" :database="database" :excerpt="true" :path="path"></vuelog-post>
    <div class="pagination">
      <a :class="{invisible: !prev}" v-link="{name: category, params: {page: prev}}" class="left">&lt;&lt; {{prev}}</a>
      <a :class="{invisible: !next}" v-link="{name: category, params: {page: next}}" class="right">{{next}} &gt;&gt;</a>
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
        current: 1,
        category: '',
        prev: false,
        next: false,
        all: [],
        paths: []
      }
    },
    props: ['database'],
    methods: {
      updatePagination (to) {
        var sitemap = this.database.sitemap
        var totalPages

        this.category = to.path.replace(/^(\/[^\/]+)\/.+/, ($, $1) => $1)
        console.log(this.category)
        for (var i = 0; i < sitemap.length; i++) {
          if (sitemap[i].type === 'category' && sitemap[i].path === this.category) {
            this.all = sitemap[i].children
            totalPages = Math.ceil(sitemap[i].children.length / this.database.pagenum)
            this.$dispatch('heading', sitemap[i].title)
            break
          }
        }

        this.current = +to.params.page || 1
        this.prev = this.current > 1 ? this.current - 1 : false
        this.next = this.current < totalPages ? this.current + 1 : false
      },
      updatePosts () {
        var startIndex = (this.current - 1) * this.database.pagenum
        var endIndex = startIndex + this.database.pagenum
        this.paths = this.all.slice(startIndex, endIndex)
      }
    },
    route: {
      data (transition) {
        this.updatePagination(transition.to)
        this.updatePosts(transition.to)
        transition.next()
      }
    }
  }
</script>
