<template>
  <div class="content">
    <div class="content-wrap">
      <div class="content-body">
        <div class="not-found">
          <h1>Oops!</h1>
          <p>The page you were looking for doesn't exist.</p>
          <a class="button" v-link="{path: '/'}">Take Me Home</a>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>Built with <i>&#10084;</i> and <a :href="database.system.project" v-text="database.system.name"></a></span>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['database'],

    route: {
      data (transition) {
        this.$dispatch('update-document-title', 'Oops!')
        transition.next()
      }
    }
  }
</script>
