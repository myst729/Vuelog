<template>
  <div class="archive">
    <div v-if="displayType === 'archive-category'" class="archive-body">
      <i18n path="archive.inCategory" tag="h2">
        <q v-text="i18nify(archive.title)"></q>
      </i18n>
      <ul>
        <li v-for="(post, index) in archive.posts" :key="index">
          <router-link :to="{name: 'post', params: {category: post.category, slug: post.slug, year: post.year}}" v-text="i18nify(post.title)"></router-link>
          <span v-text="' ( ' + post.date + ' )'"></span>
        </li>
        <li v-if="archive.posts.length === 0" v-text="$t('archive.empty')"></li>
      </ul>
    </div>

    <div v-if="displayType === 'archive-year'" class="archive-body">
      <h2 v-text="$t('archive.inYear', [archive.year])"></h2>
      <ul>
        <li v-for="(post, index) in archive.posts" :key="index">
          <router-link :to="{name: 'post', params: {category: post.category, slug: post.slug, year: archive.year}}" v-text="i18nify(post.title)"></router-link>
          <span> ( </span>
          <router-link :to="{name: 'category', params: {category: post.category}}" v-text="i18nify(post.categoryTitle)"></router-link>
          <span> )</span>
        </li>
        <li v-if="archive.posts.length === 0" v-text="$t('archive.empty')"></li>
      </ul>
    </div>

    <div v-if="displayType === 'archive'" class="archive-body">
      <h2 v-text="$t('archive.byCategory')"></h2>
      <ul>
        <li v-for="(category, index) in archive.postsByCategory" :key="index">
          <h4>
            <router-link :to="{name: 'archive-category', params: {category: category.slug}}" v-text="i18nify(category.title)"></router-link>
            <span v-text="' (' + category.posts.length + ')'"></span>
          </h4>
          <ul>
            <li v-for="(post, index) in category.posts" :key="index">
              <router-link :to="{name: 'post', params: {category: post.category, slug: post.slug, year: post.year}}" v-text="i18nify(post.title)"></router-link>
              <span v-text="' ( ' + post.date + ' )'"></span>
            </li>
            <li v-if="category.posts.length === 0" v-text="$t('archive.empty')"></li>
          </ul>
        </li>
      </ul>

      <h2 v-text="$t('archive.byYear')"></h2>
      <ul>
        <li v-for="(year, index) in archive.postsByYear" :key="index">
          <h4>
            <router-link :to="{name: 'archive-year', params: {year: year.year}}" v-text="year.year"></router-link>
            <span v-text="' (' + year.posts.length + ')'"></span>
          </h4>
          <ul>
            <li v-for="(post, index) in year.posts" :key="index">
              <router-link :to="{name: 'post', params: {category: post.category, slug: post.slug, year: post.year}}" v-text="i18nify(post.title)"></router-link>
              <span> ( </span>
              <router-link :to="{name: 'category', params: {category: post.category}}" v-text="i18nify(post.categoryTitle)"></router-link>
              <span> )</span>
            </li>
          </ul>
        </li>
      </ul>

      <h2 v-text="$t('archive.pages')"></h2>
      <ul>
        <li v-for="(page, index) in archive.pages" :key="index">
          <router-link :to="{name: 'page', params: {page: page.slug}}" v-text="i18nify(page.title)"></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { retrieveByLanguage } from '../utils'

export default {
  name: 'vuelog-archive',

  computed: {
    displayType () {
      return this.$route.name
    },

    active () {
      return this.$store.getters.lang
    },

    config () {
      return this.$store.getters.config
    },

    postsByCategory () {
      return this.$store.getters.postsByCategory
    },

    postsByYear () {
      return this.$store.getters.postsByYear
    },

    pages () {
      return this.$store.getters.pages.filter(page => !page.exclude)
    },

    archive () {
      switch (this.displayType) {
        case 'archive-category':
          return this.getPostsInCategory(this.$route.params.category)
        case 'archive-year':
          return this.getPostsInYear(+this.$route.params.year)
        case 'archive':
          return this.getAllPostsAndPages()
        default:
          return this.getAllPostsAndPages()
      }
    },

    title () {
      var title = this.$t('archive.title')
      var brand = retrieveByLanguage(this.config.brand, this.active, this.config.defaultLang)
      if (this.displayType === 'archive-category') {
        title += ' | ' + retrieveByLanguage(this.archive.title, this.active, this.config.defaultLang)
      }
      if (this.displayType === 'archive-year') {
        title += ` | ${this.archive.year}`
      }
      if (this.config.brandTrailing) {
        return title + ' | ' + brand
      } else {
        return brand + ' | ' + title
      }
    }
  },

  methods: {
    oops () {
      this.$router.replace('/oops')
    },

    i18nify (content) {
      return retrieveByLanguage(content, this.active, this.config.defaultLang)
    },

    getPostsInCategory (slug) {
      for (var i = 0; i < this.postsByCategory.length; i++) {
        if (this.postsByCategory[i].slug === slug) {
          return this.postsByCategory[i]
        }
      }
      this.oops()
      return { posts: [], slug: '', title: '' }
    },

    getPostsInYear (year) {
      if (Number.isNaN(year)) {
        this.oops()
        return { posts: [], year }
      }
      for (var i = 0; i < this.postsByYear.length; i++) {
        if (this.postsByYear[i].year === year) {
          return this.postsByYear[i]
        }
      }
      return { posts: [], year }
    },

    getAllPostsAndPages () {
      return {
        postsByCategory: this.postsByCategory,
        postsByYear: this.postsByYear,
        pages: this.pages
      }
    }
  },

  created () {
    this.$store.dispatch('documentTitle', this.title)
  },

  watch: {
    $route (to, from) {
      if (to.query.lang !== from.query.lang) {
        this.$store.dispatch('documentTitle', this.title)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .archive-enter-active
  .archive-leave-active
    transition opacity .3s ease

  .archive-enter
  .archive-leave-active
    opacity 0

  ul
    line-height 1.6em
    padding-left 1.6em

  h4
  span
    color #7f8c8d

  @media screen and (max-width: 999px)
    h4
      margin-bottom .5em

    ul
      padding-left 1em

      ul
        padding-left .75em
</style>
