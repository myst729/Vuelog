<template>
  <svg class="graph" width="48" height="48" viewBox="0 0 48 48">
    <g v-if="pattern === 'line'">
      <circle class="stroke single" fill="none" stroke="#42b983" stroke-width="4"  cx="24" cy="24" r="22" />
    </g>
    <g v-if="pattern === 'logo'">
      <circle class="stroke outer" fill="none" stroke="#42b983" stroke-width="10" cx="24" cy="24" r="19" />
      <circle class="stroke inner" fill="none" stroke="#34495e" stroke-width="8" cx="24" cy="24" r="10" />
      <circle class="stroke" fill="none" stroke="#fff" stroke-width="6" cx="24" cy="24" r="3" />
    </g>
  </svg>
</template>

<script>
  export default {
    props: ['pattern']
  }
</script>

<style lang="stylus" scoped>
  .graph
    animation graph 1.5s linear infinite

  @keyframes graph
    0%
      transform rotate(0deg)
    100%
      transform rotate(270deg)

  .stroke
    stroke-linecap round
    stroke-dashoffset 0
    transform-origin center

  .single
    stroke-dasharray 126
    animation single 1.5s ease-in-out infinite

  .outer
    stroke-dasharray 126
    animation outer 1.5s ease-in-out infinite

  .inner
    stroke-dasharray 64
    animation inner 1.5s ease-in-out infinite

  @keyframes single
    0%
      stroke-dashoffset 126
    50%
      stroke-dashoffset 63
      transform rotate(135deg)
    100%
      stroke-dashoffset 126
      transform rotate(450deg)

  @keyframes outer
    0%
      stroke-dashoffset 126
    50%
      stroke-dashoffset 63
      transform rotate(243deg)
    100%
      stroke-dashoffset 126
      transform rotate(810deg)

  @keyframes inner
    0%
      stroke-dashoffset 64
      transform rotate(45deg)
    50%
      stroke-dashoffset 32
      transform rotate(180deg)
    100%
      stroke-dashoffset 64
      transform rotate(495deg)
</style>
