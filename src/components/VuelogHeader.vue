<template>
  <div class="header-wrap">
    <header>
      <h1 class="brand">
        <router-link to="/">
          <img :src="`userdata/${config.logo}`">
          <span v-text="i18nify(config.brand)"></span>
        </router-link>
      </h1>
      <nav class="header-menu">
        <ul>
          <li v-for="(item, index) in navigation" :key="index" :class="{'nav-dropdown-container': item.type === 'dropdown'}">
            <span v-if="item.type === 'dropdown' && !item.path" v-text="i18nify(item.label)"></span>
            <router-link v-if="item.type === 'dropdown' && item.path" :to="item.path" v-text="i18nify(item.label)"></router-link>
            <ul v-if="item.type === 'dropdown'" class="nav-dropdown">
              <li v-for="(child, index) in item.children" :key="index">
                <a v-if="child.type === 'outgoing'" :href="child.link" v-text="i18nify(child.label)" target="_blank" rel="noopener noreferrer"></a>
                <router-link v-if="child.type !== 'outgoing'" :to="child.path" v-text="i18nify(child.label)"></router-link>
              </li>
            </ul>
            <a v-if="item.type === 'outgoing'" :href="item.link" target="_blank" rel="noopener noreferrer" v-text="i18nify(item.label)"></a>
            <router-link v-if="item.type !== 'dropdown' && item.type !== 'outgoing'" :to="item.path" v-text="i18nify(item.label)"></router-link>
          </li>
        </ul>
      </nav>
    </header>
    <img class="menu-icon" src="../assets/img/menu.svg" @click="toggleSideMenu">
    <div class="side-menu" :class="{'side-menu-open': menu}">
      <ul>
        <li class="side-brand"><h2 v-text="i18nify(config.brand)"></h2></li>
        <li v-for="(item, index) in navigation" :key="index" :class="{'side-dropdown-container': item.type === 'dropdown'}">
          <span v-if="item.type === 'dropdown' && !item.path" v-text="i18nify(item.label)"></span>
          <router-link v-if="item.type === 'dropdown' && item.path" :to="item.path" v-text="i18nify(item.label)"></router-link>
          <ul v-if="item.type === 'dropdown'" class="side-dropdown">
            <li v-for="(child, index) in item.children" :key="index">
              <a v-if="child.type === 'outgoing'" :href="child.link" v-text="i18nify(child.label)" target="_blank" rel="noopener noreferrer"></a>
              <router-link v-if="child.type !== 'outgoing'" :to="child.path" v-text="i18nify(child.label)"></router-link>
            </li>
          </ul>
          <a v-if="item.type === 'outgoing'" :href="item.link" target="_blank" rel="noopener noreferrer" v-text="i18nify(item.label)"></a>
          <router-link v-if="item.type !== 'dropdown' && item.type !== 'outgoing'" :to="item.path" v-text="i18nify(item.label)"></router-link>
        </li>
      </ul>
    </div>
    <transition name="fade">
      <div class="side-menu-backdrop" v-if="menu"></div>
    </transition>
  </div>
</template>

<script>
import { retrieveByLanguage } from '../utils'

export default {
  name: 'vuelog-header',

  computed: {
    active () {
      return this.$store.getters.lang
    },

    menu () {
      return this.$store.getters.menu
    },

    config () {
      return this.$store.getters.config
    },

    navigation () {
      return this.$store.getters.navigation
    }
  },

  methods: {
    closeSideMenu () {
      this.$store.dispatch('sideMenu', false)
    },

    toggleSideMenu () {
      this.$store.dispatch('sideMenu', !this.menu)
    },

    i18nify (content) {
      return retrieveByLanguage(content, this.active, this.config.defaultLang)
    }
  },

  mounted () {
    var menuIcon = this.$el.querySelector('.menu-icon')
    var sideMenu = this.$el.querySelector('.side-menu')
    document.body.addEventListener('click', e => {
      if (this.menu && e.target !== menuIcon && !sideMenu.contains(e.target)) {
        this.closeSideMenu()
      }
    })
    document.body.addEventListener('touchmove', e => {
      if (this.menu) {
        e.preventDefault()
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
  .header-wrap
    background rgba(255, 255, 255, .8)
    box-shadow 0 0 4px rgba(0, 0, 0, .25)
    width 100%
    position fixed
    left 0
    right 0
    top 0
    z-index 8000

  header
    display flex
    max-width 980px
    margin 0 auto
    padding 25px 40px

  a:hover
    text-decoration none

  .brand
    flex 1
    font-size 24px
    margin 0

    a
      color #34495e
      display inline-block
      font-weight 500

    img
    span
      display inline-block
      height 32px
      vertical-align middle

    span
      margin-left 5px

  ul
    margin 0
    padding 0

  li
    display inline-block
    font-size 15px
    line-height 40px
    margin-left 20px

    &:first-child
      margin-left 0

    a
      color #7f8c8d
      font-size 15px
      font-weight 400

      &:hover
      &.router-link-active
        border-bottom 3px solid #42b983
        padding-bottom 2px

      &.router-link-active
        color #34495e

  .nav-dropdown
    position absolute
    top 100%
    left -9000px
    background #fff
    padding 10px 0
    border 1px solid #ddd
    border-bottom-color #ccc
    border-radius 4px

    li
      display block
      line-height 28px
      margin 0

    a
      display block
      font-size .9em
      padding 0 1.4em
      white-space nowrap

      &:hover
        color #42b983
        border-bottom none
        padding 0 1.4em

  .nav-dropdown-container
    padding-right 14px
    position relative

    > a
    > span
      color #7f8c8d
      font-weight 400
      position relative

      &:after
        content ''
        display inline-block
        vertical-align middle
        margin-top -1px
        margin-left 6px
        width 0
        height 0
        border-left 4px solid transparent
        border-right 4px solid transparent
        border-top 5px solid #ccc
        transition transform .3s ease-in-out
        position absolute
        right -14px
        top 9px

    &:hover
      .nav-dropdown
        left auto
        right -10px

      > a:after
      > span:after
        transform rotateZ(180deg)

  .menu-icon
    cursor pointer
    display none
    height 32px
    width 32px
    position absolute
    left 10px
    top 10px
    z-index 9000

  .side-menu
    display none
    flex-direction column
    background #f7f7f7
    box-shadow 0 0 10px rgba(0, 0, 0, .25)
    height 100%
    width 260px
    padding 0 15px
    overflow-x hidden
    overflow-y auto
    position fixed
    top 0
    left 0
    z-index 7000
    transform translate(-280px, 0)
    transition transform .4s cubic-bezier(.4, 0, 0, 1)

    ul
      height 100%
      overflow-y auto
      padding-top 60px
      padding-bottom 10px

      li
        display block
        margin 0

      .side-brand
        line-height 48px

        h2
          margin 0
          padding-left .7em

      a
      span
        display block
        border-bottom none
        padding 0 1em

      a
        color #34495e

      span
        color #7f8c8d

      .side-dropdown-container
        > a:after
        > span:after
          content ''
          display inline-block
          vertical-align middle
          margin-top -1px
          margin-left 6px
          width 0
          height 0
          border-left 4px solid transparent
          border-right 4px solid transparent
          border-top 5px solid #ccc

      a:hover
      a.router-link-active
        color #42b983
        padding-bottom 0

      a.router-link-active
        font-weight 600

      .side-dropdown
        padding 0 0 0 15px

  .side-menu-backdrop
    display none
    background rgba(0, 0, 0, .25)
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 6000

  @media screen and (max-width: 1059px)
    header
      padding 10px 40px

  @media screen and (max-width: 999px)
    .header-wrap
      box-shadow none

    header
      background #fff
      border-bottom 1px solid #ddd
      position relative
      z-index 8000

    .brand
      a
      img
        display block
        margin 0 auto
        width 32px

      span
        display none

    .vuelog-home-view
      header
        border none
        padding 0

      .brand
        display none

    nav
      display none

    .menu-icon
      display block

    .side-menu
      display block

    .side-menu-open
      transform translate(0, 0)

    .side-menu-backdrop
      display block
</style>
