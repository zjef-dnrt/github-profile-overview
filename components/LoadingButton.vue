<template>
  <button
  type="button"
    class="button--light flex justify-center items-center laptop:ml-4 laptop:w-72 disabled:opacity-25 sisabled:pointer-events-none"
    :class="{ 'cursor-not-allowed': disabled }"
    @click="!disabled && $emit('click')"
    @keyup.enter="!disabled && $emit('enter')"
  >
    <div v-if="loading" class="scaling-dots">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <span v-else>{{ content }}</span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoadingButton',
  props: {
    content: {
      type: String,
      default: 'Click me',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
})
</script>

<style scoped>
/**
  * Scaling dots
  *
  * @author jh3y
*/
@-webkit-keyframes scaling-dots {
  0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40%,
  60% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes scaling-dots {
  0%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40%,
  60% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.scaling-dots {
  display: grid;
  height: 10px;
  grid-gap: 5px;
  grid-template-columns: repeat(4, 10px);
}
.scaling-dots div {
  -webkit-animation: scaling-dots 1s infinite ease backwards;
  animation: scaling-dots 1s infinite ease backwards;
  background-color: white;
  border-radius: 100%;
  height: 10px;
  width: 10px;
}
.scaling-dots div:nth-child(1) {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.scaling-dots div:nth-child(2) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.scaling-dots div:nth-child(3) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.scaling-dots div:nth-child(4) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.scaling-dots div:nth-child(5) {
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
</style>