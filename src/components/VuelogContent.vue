<template>
  <div class="content">
    <transition name="loading" mode="out-in" appear>
      <vuelog-spinner class="spinner" v-if="!content" key="spinner" :pattern="deploy.spinnerPattern"></vuelog-spinner>
      <div class="content-body" v-if="content" key="content" v-html="content"></div>
    </transition>
  </div>
</template>

<script>
  import hljs from 'highlight.js'
  import marked from 'marked'
  import VuelogSpinner from './VuelogSpinner'

  export default {
    name: 'vuelog-content',

    props: ['type', 'metadata', 'markdown'],

    components: {
      VuelogSpinner
    },

    computed: {
      deploy () {
        return this.$store.getters.deployment
      },

      excerpt () {
        return this.type === 'posts'
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

        if (this.excerpt) {
          content = content.split('<!-- more -->')[0]
        }

        content = content.replace(/```([^\n]*)\n([\s\S]+?)\n```/g, ($block, $lang, $code) => {
          var formatted
          try {
            formatted = hljs.highlight($lang, $code)
          } catch (e) {
            formatted = hljs.highlightAuto($code)
          }
          return `<pre data-lang="${formatted.language}"><code class="hljs ${formatted.language}">${formatted.value}</code></pre>`
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
    },

    watch: {
      markdown (newVal, oldVal) {
        if (newVal && newVal !== oldVal) {
          this.loadMarkdown(newVal)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .spinner
    display block
    margin: 100px auto 0
    height 48px
    width 48px

  .loading-enter-active
  .loading-leave-active
    transition opacity .3s ease

  .loading-enter
  .loading-leave-active
    opacity 0
</style>
