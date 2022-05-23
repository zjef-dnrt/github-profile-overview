<template>
  <div class="grid place-items-center py-10">
    <img
      :src="require(`../assets/${asset}`)"
      class="w-40"
      alt="Dynamic image"
    />
    <p class="text-center max-w-xl text-2xl mt-8 text-gray-200">
      {{ label }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    asset: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
  },
})
</script>