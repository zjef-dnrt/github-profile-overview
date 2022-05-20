<template>
  <div
    class="w-full h-96 max-h-96 flex flex-col justify-between cursor-pointer transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl bg-white max-w-sm hover-container"
  >
    <img
      class="rounded-t-lg transition-all duration-300"
      src="../assets/github_logo.svg"
      alt="Github repository logo"
    />
    <div class="p-6 flex flex-col">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{{ repo.name }}</h5>
      <p class="mb-2 text-sm text-gray-600 appear-upward overflow-hidden">
        {{ repo.description }}
      </p>
      <div class="flex">
        <span
          v-for="topic in ['test', 'haha']"
          :key="`${repo.name}-${topic}`"
          class="px-4 py-1 mr-1 rounded-full text-gray-500 bg-gray-300 font-semibold text-xs flex align-center"
          >{{ topic }}</span
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Repository } from '@/types/repository'

export default Vue.extend({
  name: 'RepositoryCard',
  props: {
    repo: {
      type: Object as () => Repository,
      default: null,
    },
  },
})
</script>

<style scoped>
.appear-upward {
  max-height: 0;
  transition: all 0.5s;
}
.hover-container:hover .appear-upward {
  /* Has to be static value, dynamic value like "auto" doens't trigger the transistion */
  max-height: 13rem;
}
</style>
