<template>
  <div class="header-search">
    <input type="text" id="search-query">
  </div>
</template>

<script>
  import algoliasearch from 'algoliasearch'
  import autocomplete from 'autocomplete.js'

  export default {
    props: ['settings'],

    methods: {
      initSearch () {
        var settings = this.settings
        if (!settings.appId || !settings.apiKey || !settings.indexName || !settings.displayKey) {
          return
        }

        var client = algoliasearch(settings.appId, settings.apiKey)
        var index = client.initIndex(settings.indexName)

        autocomplete('#search-query', {hint: false}, [{
          source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
          displayKey: settings.displayKey,
          templates: {
            suggestion (suggestion) {
              return suggestion._highlightResult[settings.displayKey].value
            }
          }
        }]).on('autocomplete:selected', (event, suggestion, dataset) => {
          // TODO: handle page routing
          console.log(suggestion, dataset)
        })
      }
    },

    activate (done) {
      this.$nextTick(this.initSearch)
      done()
    }
  }
</script>
