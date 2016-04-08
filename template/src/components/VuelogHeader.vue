<template>
  <div class="header-wrap">
    <div class="header">
      <a class="header-logo" v-link="{path: '/'}">
        <img :src="database.logo">
        <span v-text="database.title"></span>
      </a>
      <vuelog-nav :sitemap="database.sitemap"></vuelog-nav>
    </div>
  </div>
</template>

<script>
  import VuelogNav from './VuelogNav'

  export default {
    components: {
      VuelogNav
    },
    props: ['database']
  }
</script>
