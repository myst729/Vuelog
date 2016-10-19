<template>
  <div class="content">
    <transition name="loading" mode="out-in" appear>
      <vuelog-spinner class="spinner" v-if="!content" key="spinner" :pattern="config.spinnerPattern"></vuelog-spinner>
      <div class="content-body" v-if="content" key="content">
        <h1 class="content-title" v-if="type !== 'posts' && showTitle" v-text="metadata.title"></h1>
        <h2 class="content-title" v-if="type === 'posts'">
          <router-link :to="{name: 'post', params: {category: metadata.category, slug: metadata.slug, year: metadata.year}}" v-text="metadata.title"></router-link>
        </h2>
        <h4 class="content-meta" v-if="type !== 'page'">
          <span class="datetime" :data-raw="metadata.date">{{ metadata.date | meaningfulTime }}</span>
          <span> / </span>
          <router-link :to="{name: 'category', params: {category: metadata.category}}" v-text="metadata.categoryTitle"></router-link>
        </h4>
        <div class="content-container" v-html="content"></div>
        <div v-if="type === 'posts'" class="continue-reading">
          <router-link :to="{name: 'post', params: {category: metadata.category, slug: metadata.slug, year: metadata.year}}">... continue reading</router-link>
        </div>
        <vuelog-pagination v-if="type === 'post' && navs" :prev="navs.prev" :next="navs.next"></vuelog-pagination>
      </div>
    </transition>
  </div>
</template>

<script>
  import hljs from 'highlight.js'
  import marked from 'marked'
  import VuelogSpinner from './VuelogSpinner'
  import VuelogPagination from '../components/VuelogPagination'

  export default {
    name: 'vuelog-content',

    props: ['type', 'metadata', 'navs'],

    components: {
      VuelogSpinner,
      VuelogPagination
    },

    computed: {
      config () {
        return this.$store.getters.config
      }
    },

    data () {
      return {
        showTitle: true,
        content: null
      }
    },

    methods: {
      oops () {
        this.$router.replace('/oops')
      },

      toggleTitleVisibility (metadata) {
        for (var i = 0; i < metadata.length; i++) {
          if (/#\s*title:/.test(metadata[i])) {
            this.showTitle = false
            return
          }
        }
      },

      loadMarkdown (path) {
        return this.$http.get(path).then(
          response => response.data,
          exception => {
            if (this.type !== 'posts') {
              this.oops()
            }
          })
      },

      processMarkdown (md) {
        const metadataDelimiter = this.config.metadataDelimiter
        const excerptDelimiter = this.config.excerptDelimiter
        const metadataPosition = md.indexOf(metadataDelimiter)

        var metadata
        var content

        if (metadataDelimiter) {
          metadata = md.slice(0, metadataPosition).split('\n')
          this.toggleTitleVisibility(metadata)
          content = md.slice(metadataPosition + metadataDelimiter.length)
        }

        if (this.type === 'posts' && excerptDelimiter) {
          content = content.split(excerptDelimiter)[0]
        }

        return content
      },

      parseMarkdown (md) {
        // Ever thought of the GitHub API?
        // https://developer.github.com/v3/markdown/
        const content = md.replace(/```([^\n]*)\n([\s\S]+?)\n```/g, ($block, $lang, $code) => {
          var formatted
          try {
            formatted = hljs.highlight($lang, $code)
          } catch (e) {
            formatted = hljs.highlightAuto($code)
          }
          return `<pre class="code-block" data-lang="${formatted.language}"><code class="hljs ${formatted.language}">${formatted.value}</code></pre>`
        })

        return marked(content)
      }
    },

    created () {
      this.loadMarkdown(this.metadata.markdown)
        .then(this.processMarkdown)
        .then(this.parseMarkdown)
        .then(markup => {
          this.content = markup
        })
    }
  }
</script>

<style lang="stylus" scoped>
  .spinner
    display block
    margin 100px auto

  .loading-enter-active
  .loading-leave-active
    transition opacity .3s ease

  .loading-enter
  .loading-leave-active
    opacity 0

  .content-body
    flex 1
    display flex
    flex-direction column

  .content-title
    color #34495e
    margin-bottom 0

  .content-title a
    color #34495e
    border-bottom 2px solid transparent
    transition border-color .3s ease

    &:hover
      border-color #4fc08d
      text-decoration none

  .content-meta
    color #7f8c8d
    margin-top .5em
    margin-bottom 0

  .content-container
    flex 1

  .datetime
    position relative

  .datetime:before
  .datetime:after
    transform translate(-50%, 5px)
    position absolute
    left 50%
    opacity 0
    visibility hidden
    transition all .5s ease

  .datetime:before
    content ''
    border-left 5px solid transparent
    border-right 5px solid transparent
    border-bottom 5px solid #7f8c8d
    height 0
    width 0
    top 22px

  .datetime:after
    content attr(data-raw)
    background #7f8c8d
    border 1px solid #7f8c8d
    border-radius 3px
    color #fff
    font-size .8em
    padding 2px 7px
    white-space nowrap
    top 27px

  .datetime:hover:before
  .datetime:hover:after
    opacity 1
    transform translate(-50%, 0)
    visibility visible

  .continue-reading a:hover
    text-decoration none
</style>
