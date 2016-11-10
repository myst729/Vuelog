<template>
  <div class="content">
    <transition name="loading" mode="out-in" appear>
      <vuelog-spinner class="spinner" v-if="!content" key="spinner" :pattern="config.spinnerPattern"></vuelog-spinner>
      <div class="content-body" v-if="content" key="content">
        <h1 class="content-title" v-if="type !== 'posts' && !metadata.titleless" v-text="metadata.title"></h1>
        <h2 class="content-title" v-if="type === 'posts'">
          <router-link :to="{name: 'post', params: {category: metadata.category, slug: metadata.slug, year: metadata.year}}" v-text="metadata.title"></router-link>
        </h2>
        <h4 class="content-meta" v-if="type !== 'page'">
          <span v-text="$t(time.key, time.values)"></span>
          <span> / </span>
          <router-link :to="{name: 'category', params: {category: metadata.category}}" v-text="metadata.categoryTitle"></router-link>
        </h4>
        <div class="content-container" v-html="content"></div>
        <div v-if="type === 'posts'" class="continue-reading">
          <router-link :to="{name: 'post', params: {category: metadata.category, slug: metadata.slug, year: metadata.year}}" v-text="$t('reading.continued')"></router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import hljs from 'highlight.js'
  import marked from 'marked'
  import { meaningfulTime } from '../helpers'
  import VuelogSpinner from './VuelogSpinner'

  export default {
    name: 'vuelog-content',

    props: ['type', 'metadata'],

    components: {
      VuelogSpinner
    },

    computed: {
      config () {
        return this.$store.getters.config
      },

      time () {
        return meaningfulTime(this.metadata.date)
      }
    },

    data () {
      return {
        content: null,
        xhr: null
      }
    },

    methods: {
      oops () {
        this.$router.replace('/oops')
      },

      promiseRequest (method, url, header, body) {
        var self = this
        return new Promise((resolve, reject) => {
          /* global XMLHttpRequest */
          var xhr = self.xhr = new XMLHttpRequest()
          xhr.onload = () => {
            self.xhr = null
            if (xhr.status === 200) {
              resolve(xhr.responseText)
            } else {
              reject(xhr.status)
            }
          }
          xhr.onerror = () => {
            reject(xhr.status)
          }
          xhr.open(method, url, true)
          Object.keys(header || {}).forEach(key => {
            xhr.setRequestHeader(key, header[key])
          })
          xhr.send(body)
        })
      },

      loadMarkdown (path) {
        return this.promiseRequest('GET', path)
      },

      preProcess (md) {
        const metadataDelimiter = this.config.metadataDelimiter
        const metadataPosition = md.indexOf(metadataDelimiter)
        return md.slice(metadataPosition + metadataDelimiter.length)
      },

      renderMarkdown (md) {
        marked.setOptions({
          highlight: (code, lang) => {
            try {
              return hljs.highlight(lang, code).value
            } catch (e) {
              return hljs.highlightAuto(code).value
            }
          }
        })
        return marked(md)
      },

      renderGitHubMarkdown (md) {
        // Ever thought of the GitHub API [Markdown](https://developer.github.com/v3/markdown/)?
        // Well, it may not be a good idea. The API will **silently** eat some tags, like <audio>, <video>. Do it at your own risk.
        // Want the GitHub look and feel too? Check out [sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css)
        const header = { 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' }
        const body = JSON.stringify({ text: md, mode: 'markdown' })
        return this.promiseRequest('POST', 'https://api.github.com/markdown', header, body)
      },

      postProcess (markup) {
        if (this.type === 'posts' && this.config.excerptDelimiter) {
          return markup.split(this.config.excerptDelimiter)[0]
        }
        return markup
      }
    },

    created () {
      this.loadMarkdown(this.metadata.markdown)
        .then(this.preProcess)
        .then(this.renderMarkdown)
        .then(this.postProcess)
        .then(markup => {
          this.content = markup
        })
        .catch(exception => {
          if (this.type !== 'posts') {
            this.oops()
          }
        })
    },

    beforeDestroy () {
      if (this.xhr && this.xhr.readyState < 4) {
        this.xhr.abort()
      }
    }
  }
</script>

<style lang="stylus">
  @import '../assets/styles/content';
  @import '../assets/styles/highlight';
</style>

<style lang="stylus" scoped>
  .spinner
    display block
    height 48px
    width 48px
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
    transition color .3s ease

    &:hover
      color #4fc08d
      text-decoration none

  .content-meta
    color #7f8c8d
    margin-top .5em
    margin-bottom 0

  .content-container
    flex 1

  .continue-reading a:hover
    text-decoration none

  @media screen and (max-width: 999px)
    .continue-reading a:after
      opacity 1
</style>
