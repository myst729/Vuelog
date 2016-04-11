<template>
  <div id="vuelog">
    <vuelog-header :database="database"></vuelog-header>
    <router-view :database="database"></router-view>
  </div>
</template>

<script>
  import VuelogHeader from './components/VuelogHeader'

  export default {
    components: {
      VuelogHeader
    },

    data () {
      return {
        /* global VUELOG_DATABASE */
        database: VUELOG_DATABASE
      }
    },

    events: {
      'update-document-title': function (label) {
        var title = this.database.deployment.title
        document.title = label ? `${title} | ${label}` : title
      }
    }
  }
</script>
