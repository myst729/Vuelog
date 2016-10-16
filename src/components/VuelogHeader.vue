<template>
  <div class="header-wrap">
    <header>
      <div class="title">
        <router-link to="/">
          <img :src="deploy.logo">
          <span v-text="deploy.title"></span>
        </router-link>
      </div>
      <!--TODO <span class="menu-icon" @click="toggleMobileMenu"></span>-->
      <nav>
        <ul>
          <li v-for="item in navigation" :class="{'nav-dropdown-container': item.type === 'dropdown'}">
            <span v-if="item.type === 'dropdown'" v-text="item.label"></span>
            <ul v-if="item.type === 'dropdown'" class="nav-dropdown">
              <li v-for="child in item.children">
                <a v-if="child.type === 'outgoing'" :href="child.link" v-text="child.label" target="_blank" rel="noopener noreferrer"></a>
                <router-link v-if="child.type !== 'outgoing'" :to="child.path" v-text="child.label"></router-link>
              </li>
            </ul>
            <a v-if="item.type === 'outgoing'" :href="item.link" target="_blank" rel="noopener noreferrer" v-text="item.label"></a>
            <router-link v-if="item.type !== 'dropdown' && item.type !== 'outgoing'" :to="item.path" v-text="item.label"></router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'vuelog-header',

    computed: {
      deploy () {
        return this.$store.getters.deployment
      },

      navigation () {
        return this.$store.getters.navigation
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .header-wrap
    background rgba(255, 255, 255, .8)
    box-shadow 0 0 4px rgba(0, 0, 0, .25)
    width 100%
    position fixed
    z-index 9999

  header
    display flex
    width 960px
    margin 0 auto
    padding 25px 0

  a:hover
    text-decoration none

  .title
    flex 1
    font-family 'Dosis', 'Source Sans Pro', 'PingFang SC', 'Microsoft Yahei', 'Helvetica Neue', Helvetica, Arial, sans-serif
    font-size 24px
    font-weight 700

    a
      color #34495e

    img
    span
      display inline-block
      height 32px
      margin-right 5px
      vertical-align middle

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

      &:hover
      &.router-link-active
        color #34495e
        border-bottom 3px solid #42b983

  .nav-dropdown
    display none
    position absolute
    top 100%
    left -10px
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
      font-size 0.9em
      padding 0 20px
    
      &:hover
        color #42b983
        border-bottom none

  .nav-dropdown-container
    position relative

    > span
      color #7f8c8d

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
        will-change transform

      &:hover
        color #34495e

    &:hover
      .nav-dropdown
        display block

      > span:after
        transform rotateZ(180deg)
</style>
