<template>
  <svg width="256" height="256" viewBox="0 0 256 256">
    <g class="group">
      <circle class="stroke outer" fill="none" stroke="#42b983" stroke-width="51.2" cx="128" cy="128" r="102.4" />
      <circle class="stroke inner" fill="none" stroke="#34495e" stroke-width="48" cx="128" cy="128" r="52.8" />
      <circle class="stroke" fill="none" stroke="#fff" stroke-width="28.8" cx="128" cy="128" r="14.4" />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'vuelog-spinner'
}
</script>

<style lang="stylus" scoped>
  .group
    transform-origin center
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

  .outer
    stroke-dasharray 672
    animation outer 1.5s ease-in-out infinite

  .inner
    stroke-dasharray 336
    animation inner 1.5s ease-in-out infinite

  @keyframes outer
    0%
      stroke-dashoffset 660
    50%
      stroke-dashoffset 330
      transform rotate(243deg)
    100%
      stroke-dashoffset 660
      transform rotate(810deg)

  @keyframes inner
    0%
      stroke-dashoffset 330
      transform rotate(45deg)
    50%
      stroke-dashoffset 165
      transform rotate(180deg)
    100%
      stroke-dashoffset 330
      transform rotate(495deg)
</style>
