<template>
  <div class="content">
    <div class="content-wrap">
      <vuelog-content :database="database" :record="record" :type="type" :excerpt="false"></vuelog-content>
    </div>

    <div class="footer">
      <span>Built with <i>&#10084;</i> and <a :href="database.system.project" v-text="database.system.name"></a></span>
    </div>
  </div>
</template>

<script>
  import VuelogContent from './VuelogContent'

  export default {
    components: {
      VuelogContent
    },

    props: ['database'],

    data () {
      return {
        record: {},
        type: 'page'
      }
    },

    methods: {
      getPageRecord (slug) {
        var pages = this.database.pages

        for (var i = 0; i < pages.length; i++) {
          if (pages[i].slug === slug) {
            this.record = pages[i]
            return
          }
        }
      }
    },

    route: {
      data (transition) {
        var params = transition.to.params
        var slug = (params && params.page)
        this.getPageRecord(slug)

        transition.next()
      }
    }
  }
</script>
