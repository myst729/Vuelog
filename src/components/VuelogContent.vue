<template>
  <div class="content-body">
    <h1 v-if="showTitle && !excerpt" class="post-title" v-text="title"></h1>
    <h2 v-if="showTitle && excerpt" class="post-title">
      <a v-if="type === 'page'" v-link="{name: 'page', params: {page: record.slug}}" v-text="title"></a>
      <a v-if="type === 'post'" v-link="{name: 'post', params: {category: record.category, time: record.routeTime, post: record.slug}}" v-text="title"></a>
    </h2>

    <h4 v-if="type === 'post'" class="post-meta">
      <span v-text="record.displayTime"></span>
      <span> / </span>
      <a v-link="{name: 'category', params: {category: record.category}}" v-text="record.categoryTitle"></a>
    </h4>

    <div class="post-body" v-html="content"></div>

    <a v-if="excerpt && type === 'post'" v-link="{name: 'post', params: {category: record.category, time: record.routeTime, post: record.slug}}" class="read-more">... continue reading</a>
  </div>
</template>

<script>
  import hljs from 'highlight.js'
  import marked from 'marked'
  import utils from '../utils.js'

  export default {
    props: ['database', 'record', 'type', 'excerpt'],

    data () {
      return {
        title: '',
        content: '',
        showTitle: true
      }
    },

    methods: {
      fetchContent (record) {
        var folder = this.database.deployment.folder
        var year = utils.formatTime(record.date, this.database.deployment.routeTime)
        var fullpath = this.type === 'post' ? `${folder}/${record.category}/${year}/${record.slug}.md` : `${folder}/${record.slug}.md`
        /* global fetch */
        return fetch(fullpath).then(response => response.ok && response.text())
      },

      parseContent (md) {
        var delimiter = '\n---\n'
        var delimiterPosition = md.indexOf(delimiter)
        var metadata = md.slice(0, delimiterPosition).split('\n')
        var content = md.slice(delimiterPosition + delimiter.length)
        var title = metadata[0].replace('title:', '').trim()

        this.showTitle = (title !== 'NOSHOW')
        this.title = (title || this.record.title)

        if (this.excerpt) {
          content = content.split('<!-- more -->')[0]
        } else {
          this.$dispatch('update-document-title', this.title)
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

        this.content = marked(content)
      },

      getContent (record) {
        // Safari and Android doesn't suppport fetch API and promise well, at the moment
        // this.fetchContent(record).then(this.parseContent)

        var folder = this.database.deployment.folder
        var year = utils.formatTime(record.date, this.database.deployment.routeTime)
        var fullpath = this.type === 'post' ? `${folder}/${record.category}/${year}/${record.slug}.md` : `${folder}/${record.slug}.md`
        /* global XMLHttpRequest */
        var xhr = new XMLHttpRequest()
        xhr.open('GET', fullpath, true)
        xhr.onload = () => {
          if (xhr.status === 200) {
            this.parseContent(xhr.responseText)
          }
        }
        xhr.send(null)
      }
    },

    activate (done) {
      var record = this.record
      if (record && record.category && record.date && record.slug) {
        this.getContent(record)
      }
      done()
    },

    watch: {
      record (newRecord, oldRecord) {
        if (newRecord && newRecord !== oldRecord) {
          this.getContent(newRecord)
        }
      }
    }
  }
</script>
