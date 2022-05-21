<template>
  <div id="repo-stars" :data-stars="stars">
    <img src="../assets/star.svg" alt="Star" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    stars: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped>
#repo-stars {
  position: absolute;
  display: grid;
  place-items: center;
  z-index: 1;
  top: 1rem;
  right: 1rem;

  & img {
    width: 1rem;
    display: inline-block;
  }

  &::after {
    content: attr(data-stars);
    color: #ed8a19;
    font-size: 10px;
  }
}
</style>