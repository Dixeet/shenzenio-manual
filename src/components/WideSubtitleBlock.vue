<template>
  <div class="wide-subtitle-block --my-7 --font-size-4">
    <slot/>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.wide-subtitle-block {
  background-color: var(--vp-code-block-bg);
  text-align: center;
  text-transform: uppercase;
  h2 {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    border: none;
    line-height: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
  }
}
</style>