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
      heading (title) {
        document.title = title ? `${this.database.title} | ${title}` : this.database.title
      }
    }
  }
</script>
