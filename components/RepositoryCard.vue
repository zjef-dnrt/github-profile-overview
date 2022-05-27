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
      shadow-sm
      bg-white
      transform
      hover:shadow-lg hover:-translate-y-1 hover-container
    "
    :to="{ name: 'repository-name', params: { name: repo.full_name } }"
  >
    <img
      v-if="repo.fork"
      id="fork"
      src="../assets/git-fork.svg"
      alt="Fork icon"
      title="Forked repository"
    />
    <StarsDisplay :stars="repo.stargazers_count" />
    <img
      class="rounded-t-lg transition-all duration-300"
      src="../assets/github-repo-logo.svg"
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
import Vue, { PropType } from 'vue'
import { Repository } from '@/types/repository'

export default Vue.extend({
  name: 'RepositoryCard',
  props: {
    repo: {
      type: Object as PropType<Repository>,
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

  & #fork {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  &:hover .appear-upward {
    /* Has to be static value, dynamic value like "auto" doens't trigger the transistion */
    max-height: 13rem;
  }
}
</style>
