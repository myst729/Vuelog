<template>
  <ul class="nav">
    <li v-for="item in sitemap" track-by="$index" :class="{'nav-dropdown-container': item.type === 'dropdown'}">
      <a v-if="item.type === 'dropdown'" v-text="item.title"></a></a>
      <ul v-if="item.type === 'dropdown'" class="nav-dropdown">
        <li v-for="child in item.children" track-by="$index">
          <a v-if="child.type === 'outgoing'" v-bind:href="child.path" target="_blank" v-text="child.title"></a>
          <a v-else v-link="{path: child.path, activeClass: ''}" v-text="child.title"></a>
        </li>
      </ul>
      <a v-if="item.type === 'outgoing'" v-bind:href="item.path" target="_blank" v-text="item.title"></a></a>
      <a v-if="item.type !== 'dropdown' && item.type !== 'outgoing'" v-link="{path: item.path, activeClass: 'current'}" v-text="item.title"></a></a>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['sitemap']
  }
</script>
