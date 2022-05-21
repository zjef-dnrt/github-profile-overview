<template>
  <NuxtLink
    class="
      w-full
      h-96
      max-h-96
      flex flex-col
      justify-between
      cursor-pointer
      transition-all
      duration-300
      rounded-lg
      shadow-xl
      bg-white
      max-w-sm
      hover-container
    "
    :to="{
      name: 'repository-name',
      params: { name: repo.name, fullName: repo.full_name },
    }"
  >
    <StarsDisplay :stars="repo.stargazers_count" />
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
      <div class="flex flex-wrap">
        <span
          v-for="topic in repo.topics"
          :key="`${repo.name}-${topic}`"
          class="
            px-4
            py-1
            mr-1
            mb-1
            min-w-max
            rounded-full
            text-gray-500
            bg-gray-300
            font-semibold
            text-xs
            flex
            align-center
          "
          >{{ topic }}</span
        >
      </div>
    </div>
  </NuxtLink>
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

<style lang="scss" scoped>
.appear-upward {
  max-height: 0;
  transition: all 300ms;
}
.hover-container {
  position: relative;

  &:hover .appear-upward {
    /* Has to be static value, dynamic value like "auto" doens't trigger the transistion */
    max-height: 13rem;
  }
}
</style>
