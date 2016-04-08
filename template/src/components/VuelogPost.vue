<template>
  <div class="post">
    <h1 v-if="!excerpt && title" class="post-title">{{title}}</h1>
    <h2 v-if="excerpt && title" class="post-title"><a v-if="excerpt" v-link="{path: path}">{{title}}</a></h2>
    <h4 v-if="date">{{date}}</h4>
    <div class="post-body">{{{content}}}</div>
    <a v-if="excerpt" v-link="{path: path}" class="read-more">... continue reading</a>
  </div>
</template>

<script>
  import hljs from 'highlight.js'
  import marked from 'marked'

  export default {
    data () {
      return {
        title: '',
        date: '',
        content: ''
      }
    },
    props: ['database', 'excerpt', 'path'],
    methods: {
      fetchContent (path) {
        var fullpath = this.database.posts + path + '.md'
        /* global fetch */
        return fetch(fullpath).then(response => response.ok && response.text())
      },
      parseContent (md) {
        var delimiter = '\n---\n'
        var delimiterPosition = md.indexOf(delimiter)
        var meta = md.slice(0, delimiterPosition).split('\n')
        var content = md.slice(delimiterPosition + delimiter.length)

        this.title = meta[0] ? meta[0].replace('title:', '').trim() : ''
        this.date = meta[1] ? meta[1].replace('date:', '').trim() : ''

        if (this.excerpt) {
          // in category view
          content = content.split('<!-- more -->')[0]
        } else {
          var heading = meta[2] ? meta[2].replace('heading:', '').trim() : ''
          this.$dispatch('heading', heading || this.title)
        }

        content = content.replace(/```(\w*)\n([\s\S]+?)\n```/g, ($block, $lang, $code) => {
          var formatted
          try {
            formatted = hljs.highlight($lang, $code)
          } catch (e) {
            formatted = hljs.highlightAuto($code)
          }
          return `<pre data-lang="${formatted.language}"><code class="hljs ${formatted.language}">${formatted.value}</code></pre>`
        })

        this.content = marked(content)
      },
      getContent (path) {
        this.fetchContent(path).then(this.parseContent)
      }
    },
    activate (done) {
      if (this.path) {
        this.getContent(this.path)
      }
      done()
    },
    watch: {
      path (newPath, oldPath) {
        if (newPath && newPath !== oldPath) {
          this.getContent(newPath)
        }
      }
    }
  }
</script>
