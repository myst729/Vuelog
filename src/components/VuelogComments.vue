<template>
  <div class="comments">
    <vue-disqus v-if="type === 'disqus'" :shortname="config.disqusShortname"></vue-disqus>
    <vue-livere v-if="type === 'livere'" :uid="config.livereUid" :refer="path"></vue-livere>
  </div>
</template>

<script>
import VueDisqus from 'vue-disqus'
import VueLivere from 'vue-livere/VueLivere'

export default {
  name: 'vuelog-comments',

  components: {
    VueDisqus,
    VueLivere
  },

  props: ['path'],

  computed: {
    config () {
      return this.$store.getters.config
    },

    type () {
      if (this.config.disqusShortname) {
        return 'disqus'
      }
      if (this.config.livereUid) {
        return 'livere'
      }
      return null
    }
  }
}
</script>

<style lang="stylus" scoped>
  .comments
    padding-bottom 10px
</style>
