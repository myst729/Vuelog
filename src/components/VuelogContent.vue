<template>
  <div class="content">
    <transition name="loading" mode="out-in" appear>
      <vuelog-spinner class="spinner" v-if="!content" key="spinner" :pattern="config.spinnerPattern"></vuelog-spinner>
      <div class="content-body" v-if="content" key="content">
        <h4 class="content-meta" v-if="type !== 'page'">
          <span class="datetime" :data-raw="metadata.date">{{ metadata.date | meaningfulTime }}</span>
          <span> / </span>
          <router-link :to="{name: 'category', params: {category: metadata.category}}" v-text="metadata.categoryTitle"></router-link>
        </h4>
        <div class="content-container" v-html="content"></div>
        <vuelog-pagination v-if="type === 'post'" :prev="navs.prev" :next="navs.next"></vuelog-pagination>
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

    props: ['type', 'metadata', 'markdown', 'navs'],

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
        content: null
      }
    },

    methods: {
      loadMarkdown (path) {
        this.content = null

        /* global XMLHttpRequest */
        var xhr = new XMLHttpRequest()
        xhr.open('GET', path, true)
        xhr.onload = () => {
          if (xhr.status === 200) {
            this.content = this.parseMarkdown(xhr.responseText)
          }
        }
        xhr.send(null)
      },

      parseMarkdown (md) {
        var delimiter = '\n---\n'
        var delimiterPosition = md.indexOf(delimiter)
        var content = md.slice(delimiterPosition + delimiter.length)

        if (this.type === 'posts') {
          content = content.split('<!-- more -->')[0]
        }

        content = content.replace(/```([^\n]*)\n([\s\S]+?)\n```/g, ($block, $lang, $code) => {
          var formatted
          try {
            formatted = hljs.highlight($lang, $code)
          } catch (e) {
            formatted = hljs.highlightAuto($code)
          }
          return `<pre class="code-block" data-lang="${formatted.language}"><code class="hljs ${formatted.language}">${formatted.value}</code></pre>`
        })

        // Have you ever thought of the GitHub API?
        // https://developer.github.com/v3/markdown/
        return marked(content)
      }
    },

    created () {
      if (this.markdown) {
        this.loadMarkdown(this.markdown)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .spinner
    display block
    margin 30px auto

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

  .content-meta
    color #7f8c8d
    margin 0

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
</style>
