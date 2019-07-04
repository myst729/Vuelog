<template>
  <div class="content-part" v-html="markup"></div>
</template>

<script>
export default {
  name: 'vuelog-content',

  props: ['markups'],

  computed: {
    active () {
      // Param `part` is `undefined` when default nested view is matched, set to 1.
      var index = (this.$route.params.part || 1) - 1

      if (Number.isNaN(index)) {
        // Treat invalid param as out of range, end up oops.
        return -1
      }
      return index
    },

    markup () {
      if (this.active < 0 || this.active > this.markups.length - 1) {
        // Pagination out of range.
        this.oops()
        return ''
      }
      return this.markups[this.active]
    }
  },

  methods: {
    oops () {
      this.$router.replace('/oops')
    }
  }
}
</script>
