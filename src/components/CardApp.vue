<template>
  <div class="language- vp-adaptive-theme">
    <div class="shiki github-dark vp-code-dark app-card__content" :class="{'app-card__content--pre': props.pre !== undefined}">
      <slot></slot>
    </div>
    <div class="shiki github-light vp-code-light app-card__content" :class="{'app-card__content--pre': props.pre !== undefined}">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['pre'])
</script>

<style lang="scss">
.app {
  &-card__content {
    padding: 20px 24px;
    &--pre {
      font-family: var(--vp-font-family-mono);
    }
  }
}
</style>