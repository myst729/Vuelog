<template>
  <svg class="graph" width="48px" height="48px" viewBox="0 0 48 48">
    <circle class="line" fill="none" stroke-width="4" stroke-linecap="round" cx="24" cy="24" r="22"></circle>
  </svg>
</template>

<style lang="stylus" scoped>
  .graph
    animation rotator 1.5s linear infinite

  @keyframes rotator
    0%
      transform rotate(0deg)
    100%
      transform rotate(270deg)

  .line
    stroke #42b983
    stroke-dasharray 126
    stroke-dashoffset 0
    transform-origin center
    animation dash 1.5s ease-in-out infinite

  @keyframes dash
    0%
      stroke-dashoffset 126
    50%
      stroke-dashoffset 63
      transform rotate(135deg)
    100%
      stroke-dashoffset 126
      transform rotate(450deg)
</style>
