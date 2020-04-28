<template>
  <div class="renderer">
    <transition name="fade" mode="out-in">
      <vuelog-spinner class="spinner" v-if="!content" key="spinner"></vuelog-spinner>
      <div class="content-body" v-if="content" :key="active">
        <h1 class="content-title" v-if="type !== 'posts' && !metadata.titleless" v-text="i18nify(metadata.title)"></h1>
        <h2 class="content-title" v-if="type === 'posts'">
          <router-link :to="{name: 'post', params: {category: metadata.category, slug: metadata.slug, year: metadata.year}}" v-text="i18nify(metadata.title)"></router-link>
        </h2>
        <h4 class="content-meta" v-if="type !== 'page'">
          <span v-text="$t(time.key, time.values)"></span>
          <span> / </span>
          <router-link :to="{name: 'category', params: {category: metadata.category}}" v-text="i18nify(metadata.categoryTitle)"></router-link>
        </h4>
        <!-- used in posts view -->
        <div v-if="type === 'posts'">
          <div class="content-container" v-html="content[0]"></div>
          <div class="continue-reading">
            <router-link :to="{name: 'post', params: {category: metadata.category, slug: metadata.slug, year: metadata.year}}" v-text="$t('reading.continued')"></router-link>
          </div>
        </div>
        <!-- used in page/post view -->
        <div v-if="type !== 'posts'">
          <div class="content-container">
            <transition name="fade" mode="out-in" @before-leave="closeSideMenu" @before-enter="resetScroll">
              <router-view :key="routeKey" :markups="content"></router-view>
            </transition>
          </div>
          <vuelog-pagination v-if="content.length > 1" :total="content.length" :type="type"></vuelog-pagination>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import marked from 'marked'
import Prism from 'prismjs'
import { meaningfulTime, retrieveByLanguage } from '../utils'
import VuelogPagination from './VuelogPagination'
import VuelogSpinner from './VuelogSpinner'

export default {
  name: 'vuelog-renderer',

  props: ['type', 'metadata'],

  components: {
    VuelogPagination,
    VuelogSpinner
  },

  computed: {
    active () {
      return this.$store.getters.lang
    },

    config () {
      return this.$store.getters.config
    },

    languages () {
      return this.$store.getters.languages
    },

    content () {
      if (!this.contentByLang) {
        return null
      }
      if (this.contentByLang[this.active]) {
        return this.contentByLang[this.active]
      }
      return this.contentByLang['**-**']
    },

    time () {
      return meaningfulTime(this.metadata.date)
    },

    routeKey () {
      // Avoid router-view reload when routing from default match to part 1 or vise versa.
      var path = this.$route.path.replace(/\/$/, '')
      if (this.$route.name === 'page' || this.$route.name === 'post') {
        return path + '/1'
      }
      return path
    }
  },

  data () {
    return {
      metadataRexExp: /\n-{3,}\n/,
      metadataDelimiter: '<!-- meta -->',
      excerptDelimiter: '<!-- more -->',
      contentDelimiter: '<!-- next -->',
      LanguageStartTag: '<!-- LANG:+ -->',
      LanguageEndTag: '<!-- LANG:- -->',
      contentByLang: null,
      xhr: null
    }
  },

  methods: {
    oops () {
      this.$router.replace('/oops')
    },

    i18nify (content) {
      return retrieveByLanguage(content, this.active, this.config.defaultLang)
    },

    closeSideMenu () {
      this.$store.dispatch('sideMenu', false)
    },

    resetScroll () {
      window.scrollTo(0, 0)
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

    setupMarked () {
      const defaultOptions = {
        smartypants: true,
        highlight (code, lang) {
          if (lang) {
            try {
              return Prism.highlight(code, Prism.languages[lang], lang)
            } catch (e) {
              return code
            }
          }
          return code
        }
      }

      const options = Object.assign(defaultOptions, this.config.markedOptions)
      marked.setOptions(options)
    },

    loadMarkdown (path) {
      return this.promiseRequest('GET', path)
    },

    preProcess (md) {
      const metadataDelimiter = this.metadataDelimiter
      const markdown = md.replace(this.metadataRexExp, metadataDelimiter)
      const metadataPosition = markdown.indexOf(metadataDelimiter)
      const contentMd = markdown.slice(metadataPosition + metadataDelimiter.length)
      var mdByLang = {}
      Object.keys(this.languages).forEach(lang => {
        const startTag = this.LanguageStartTag.replace('LANG', lang)
        const endTag = this.LanguageEndTag.replace('LANG', lang)
        const startPosition = contentMd.indexOf(startTag)
        const endPosition = contentMd.indexOf(endTag)
        if (startPosition > -1 && endPosition > -1) {
          mdByLang[lang] = contentMd.substring(startPosition + startTag.length, endPosition).trim()
          // Default language is set for fall back
          if (this.config.defaultLang === lang) {
            mdByLang['**-**'] = mdByLang[lang]
          }
        }
      })
      var providedLangs = Object.keys(mdByLang)
      // The content is multilingua, but none is in default language
      // Use the language that comes the first for fall back
      if (providedLangs.length > 0 && providedLangs.indexOf('**-**') === -1) {
        mdByLang['**-**'] = mdByLang[providedLangs[0]]
      }
      // The content is not multilingua
      if (Object.keys(mdByLang).length === 0) {
        mdByLang['**-**'] = contentMd.trim()
      }
      return mdByLang
    },

    renderMarkdown (mdByLang) {
      var markupByLang = {}
      Object.keys(mdByLang).forEach(lang => {
        markupByLang[lang] = marked(mdByLang[lang])
      })
      return markupByLang
    },

    // Ever thought of the GitHub API [Markdown](https://developer.github.com/v3/markdown/)?
    // Well, it may not be a good idea. The API will **silently** eat some tags, like <audio>, <video>. Do it at your own risk.
    // Want the GitHub look and feel too? Check out [sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css)
    renderGitHubMarkdown (md) {
      const header = { Accept: 'application/vnd.github.v3+json', 'Content-Type': 'application/json' }
      const body = JSON.stringify({ text: md, mode: 'markdown' })
      return this.promiseRequest('POST', 'https://api.github.com/markdown', header, body)
    },

    getDelimiterPosition (markup, delimiter) {
      if (!delimiter) {
        return markup.length
      }
      var position = markup.indexOf(delimiter)
      return position > -1 ? position : markup.length
    },

    sliceMarkup (markup) {
      if (this.type === 'posts') {
        // For posts view, if both excerptDelimiter and contentDelimiter are inserted, display the shorter part.
        var excerptPosition = this.getDelimiterPosition(markup, this.excerptDelimiter)
        var contentPosition = this.getDelimiterPosition(markup, this.contentDelimiter)
        return [markup.substring(0, Math.min(excerptPosition, contentPosition))]
      }
      // For page or post view, show part of content if contentDelimiter is inserted, otherwise full content.
      return this.contentDelimiter ? markup.split(this.contentDelimiter).filter(m => m.trim().length) : [markup]
    },

    postProcess (markupByLang) {
      var markupsByLang = {}
      Object.keys(markupByLang).forEach(lang => {
        markupsByLang[lang] = this.sliceMarkup(markupByLang[lang])
      })
      return markupsByLang
    }
  },

  created () {
    this.setupMarked()

    this.loadMarkdown(this.metadata.markdown)
      .then(this.preProcess)
      .then(this.renderMarkdown)
      .then(this.postProcess)
      .then(markupsByLang => {
        this.contentByLang = markupsByLang
      })
      .catch(exception => {
        if (this.type !== 'posts') {
          this.oops()
        }
      })
  },

  beforeDestroy () {
    if (this.xhr && this.xhr.readyState < 4) {
      this.xhr.onload = this.xhr.onerror = function () {}
      this.xhr.abort()
      this.xhr = null
    }
  }
}
</script>

<style lang="stylus" scoped>
  .spinner
    display block
    height 48px
    width 48px
    margin 100px auto

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
    h1.content-title
      font-size 1.75em

    .continue-reading a:after
      opacity 1
</style>
