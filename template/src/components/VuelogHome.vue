<template>
  <div class="home-wrap">
    <div class="home-logo">
      <img :src="database.system.logo">
      <h1 v-text="database.system.name"></h1>
    </div>
    <p class="home-desc" v-text="database.system.description"></p>
    <p class="home-buttons">
      <a class="button" :href="database.system.release" v-text="'Download v' + database.system.version"></a>
    </p>
  </div>
</template>

<script>
  export default {
    props: ['database'],

    route: {
      data (transition) {
        this.$dispatch('update-document-title')
        transition.next()
      }
    }
  }
</script>
