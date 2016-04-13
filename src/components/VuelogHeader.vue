<template>
  <div class="header-wrap">
    <div class="header" :class="{'mobile-menu-open': showMobileMenu}">
      <div class="header-logo">
        <a v-link="{path: '/'}">
          <img :src="database.deployment.logo">
          <span v-text="database.deployment.title"></span>
        </a>
      </div>
      <span class="menu-icon" @click="toggleMobileMenu"></span>
      <div class="header-menu">
        <vuelog-search v-if="database.search.enable" :settings="database.search"></vuelog-search>
        <vuelog-navigation :items="database.navigation"></vuelog-navigation>
      </div>
    </div>
  </div>
</template>

<script>
  import VuelogNavigation from './VuelogNavigation'
  import VuelogSearch from './VuelogSearch'

  export default {
    components: {
      VuelogNavigation,
      VuelogSearch
    },

    props: ['database'],

    data () {
      return {
        showMobileMenu: false
      }
    },

    events: {
      'nav-menu-clicked': function () {
        this.showMobileMenu = false
      }
    },

    methods: {
      toggleMobileMenu () {
        this.showMobileMenu = !this.showMobileMenu
      }
    }
  }
</script>
