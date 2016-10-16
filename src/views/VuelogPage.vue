<template>
  <div class="page">
    <div class="page-body">
      <h1>Vuelog Page (TODO) {{$route.params.page}}</h1>
      <vuelog-content class="page-body" :type="$route.name" :slug="$route.params.page"></vuelog-content>
    </div>
  </div>
</template>

<script>
  import VuelogContent from '../components/VuelogContent'

  export default {
    name: 'vuelog-page-view',

    components: {
      VuelogContent
    }
  }
</script>

<style lang="stylus" scoped>
  .page-body
    // padding 1em 0 2em
    color red
</style>
