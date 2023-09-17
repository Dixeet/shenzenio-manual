<template>
  <div class="img-container">
    <img :width="width" :src="withBase(src)" :alt="alt" >
  </div>
</template>

<script setup>
import { withBase } from 'vitepress';
const { src, width, alt } = defineProps(['src', 'width', 'alt'])
</script>

<style lang="scss">
.img-container {
  img {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>