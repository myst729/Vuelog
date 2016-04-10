<template>
  <div class="content">
    <div class="content-wrap">
      <div v-if="displayType === 'category'" class="content-body">
        <h2>Posts in <q v-text="postsInCategory.title"></q>:</h2>
        <ul>
          <li v-for="post in postsInCategory.posts" track-by="$index">
            <a v-link="{name: 'post', params: {category: post.category, post: post.slug, time: post.routeTime}}" v-text="post.title"></a>
            <span v-text="' ( ' + post.displayTime + ' )'"></span>
          </li>
        </ul>
      </div>

      <div v-if="displayType === 'year'" class="content-body">
        <h2 v-text="'Posts in ' + postsInYear.year + ':'"></h2>
        <ul>
          <li v-for="post in postsInYear.posts" track-by="$index">
            <a v-link="{name: 'post', params: {category: post.category, post: post.slug, time: post.routeTime}}" v-text="post.title"></a>
            <span> ( </span>
            <a v-link="{name: 'category', params: {category: post.category}}" v-text="post.categoryTitle"></a>
            <span> )</span>
          </li>
        </ul>
      </div>

      <div v-if="displayType === 'all'" class="content-body">
        <h2>Posts by Category:</h2>
        <ul>
          <li v-for="byCategory in postsByCategory" track-by="$index">
            <h4>
              <a v-link="{name: 'archive-category', params: {category: byCategory.slug}}" v-text="byCategory.title"></a>
              <span v-text="' (' + byCategory.posts.length + ')'"></span>
            </h4>
            <ul>
              <li v-for="post in byCategory.posts" track-by="$index">
                <a v-link="{name: 'post', params: {category: post.category, post: post.slug, time: post.routeTime}}" v-text="post.title"></a>
                <span v-text="' ( ' + post.displayTime + ' )'"></span>
              </li>
            </ul>
          </li>
        </ul>

        <h2>Posts by Year:</h2>
        <ul>
          <li v-for="byYear in postsByYear | orderBy 'year' -1" track-by="$index">
            <h4>
              <a v-link="{name: 'archive-year', params: {year: byYear.year}}" v-text="byYear.year"></a>
              <span v-text="' (' + byYear.posts.length + ')'"></span>
            </h4>
            <ul>
              <li v-for="post in byYear.posts" track-by="$index">
                <a v-link="{name: 'post', params: {category: post.category, post: post.slug, time: post.routeTime}}" v-text="post.title"></a>
                <span> ( </span>
                <a v-link="{name: 'category', params: {category: post.category}}" v-text="post.categoryTitle"></a>
                <span> )</span>
              </li>
            </ul>
          </li>
        </ul>

        <h2>Pages:</h2>
        <ul>
          <li v-for="page in database.pages" track-by="$index">
            <a v-link="{name: 'page', params: {page: page.slug}}" v-text="page.title"></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer">
      <span>Built with <i>&#10084;</i> and <a :href="database.system.project" v-text="database.system.name"></a></span>
    </div>
  </div>
</template>

<script>
  import utils from '../utils.js'

  export default {
    props: ['database'],

    data () {
      return {
        displayType: 'all',
        postsByCategory: {},
        postsInCategory: {},
        postsByYear: {},
        postsInYear: {}
      }
    },

    methods: {
      classifyAllPosts () {
        var result = utils.classifyAllPosts(this.database)
        this.postsByCategory = result.byCategory
        this.postsByYear = result.byYear
      },

      classifyPosts (displayType, criteria) {
        if (displayType === 'category') {
          this.postsInCategory = this.postsByCategory[criteria] || {}
        } else if (displayType === 'year') {
          this.postsInYear = this.postsByYear[criteria] || {}
        }
      }
    },

    route: {
      data (transition) {
        this.displayType = 'all'
        this.classifyAllPosts()

        var params = transition.to.params
        var criteria = (params && params.category || params.year)

        if (criteria) {
          this.displayType = params.category ? 'category' : 'year'
          this.classifyPosts(this.displayType, criteria)
        }

        this.$dispatch('update-document-title', 'Archive')
        transition.next()
      }
    }
  }
</script>
