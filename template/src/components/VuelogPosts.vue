<template>
  <div class="content">
    <div class="content-wrap">
      <vuelog-content v-for="record in records" track-by="$index" :database="database" :record="record" :type="type" :excerpt="true"></vuelog-content>
    </div>

    <div class="pagination">
      <div class="prev" v-if="prev">
        <a v-if="prev === 1" v-link="{name: pathname, params: {category: category}}">&laquo; Prev</a>
        <a v-else v-link="{name: pathname + '-more', params: {category: category, p: prev}}">&laquo; Prev</a>
      </div>
      <div class="next" v-if="next">
        <a v-link="{name: pathname + '-more', params: {category: category, p: next}}">Next &raquo;</a>
      </div>
    </div>

    <div class="footer">
      <span>Built with <i>&#10084;</i> and <a :href="database.system.project" v-text="database.system.name"></a></span>
    </div>
  </div>
</template>

<script>
  import utils from '../utils.js'
  import VuelogContent from './VuelogContent'

  export default {
    components: {
      VuelogContent
    },

    props: ['database'],

    data () {
      return {
        pathname: 'blog',
        category: '',
        p: 1,
        records: [],
        type: 'post',
        prev: 0,
        next: 0
      }
    },

    methods: {
      getPostRecords (pathname, p, category) {
        var perPage = this.database.deployment.perPage
        var classified = utils.classifyAllPosts(this.database)
        var filtered = (pathname === 'blog') ? classified.all : classified.byCategory[category].posts
        var totalP = Math.ceil(filtered.length / perPage)
        var categoryTitle = filtered[0].categoryTitle

        this.prev = this.p > 1 ? this.p - 1 : 0
        this.next = this.p < totalP ? this.p + 1 : 0

        var startIndex = (this.p - 1) * perPage
        var endIndex = startIndex + perPage
        this.records = filtered.slice(startIndex, endIndex)

        this.$dispatch('update-document-title', this.pathname === 'blog' ? 'Blog' : categoryTitle)
      }
    },

    route: {
      data (transition) {
        var params = transition.to.params
        this.category = (params && params.category)
        this.p = (params && +params.p) || 1
        this.pathname = this.category ? 'category' : 'blog'
        this.getPostRecords(this.pathname, this.p, this.category)

        transition.next()
      }
    }
  }
</script>
