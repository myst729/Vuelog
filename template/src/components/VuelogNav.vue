<template>
  <ul class="nav">
    <li v-for="item in sitemap" track-by="$index" :class="{'nav-dropdown-container': item.type === 'dropdown'}">
      <a v-if="item.type === 'dropdown'">{{item.title}}</a>
      <ul v-if="item.type === 'dropdown'" class="nav-dropdown">
        <li v-for="child in item.children" track-by="$index">
          <a v-if="child.type === 'outgoing'" href="{{child.path}}" target="_blank">{{child.title}}</a>
          <a v-else v-link="{path: child.path, activeClass: ''}">{{child.title}}</a>
        </li>
      </ul>
      <a v-if="item.type === 'outgoing'" href="{{item.path}}" target="_blank">{{item.title}}</a>
      <a v-if="item.type !== 'dropdown' && item.type !== 'outgoing'" v-link="{path: item.path, activeClass: 'current'}">{{item.title}}</a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['sitemap']
  }
</script>
