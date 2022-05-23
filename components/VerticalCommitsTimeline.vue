<template>
  <ol class="relative ml-7 mt-7 border-l border-gray-200 dark:border-gray-700 transition-all duration-1000">
    <li v-for="commitInfo in commits" :key="commitInfo.sha" class="mb-7 ml-4">
      <div
        class="
          absolute
          w-3
          h-3
          bg-gray-200
          rounded-full
          mt-1.5
          -left-1.5
          border border-white
        "
      ></div>
      <time
        class="mb-1 text-sm font-bold leading-none text-gray-300 tracking-wide"
        >{{ commitInfo.commit.committer.date | formatDate }}</time
      >
      <div class="mt-2 mb-3 flex items-center">
        <img
          class="mr-3 w-12 h-12 rounded-full"
          :src="getAvatarUrl(commitInfo.author)"
          alt="Github profile avatar"
        />
        <h3 class="text-lg font-semibold text-gray-700">
          {{ commitInfo.commit.author.name }}
        </h3>
      </div>
      <p class="mb-4 text-base font-normal text-blue-900">
        {{ commitInfo.commit.message }}
      </p>
      <a
        :href="commitInfo.html_url"
        target="_blank"
        class="
          inline-flex
          items-center
          py-1
          px-4
          text-sm
          font-medium
          text-gray-200
          bg-blue-500
          hover:bg-blue-600
          rounded-lg
          hover:shadow-md
          transition-all
          duration-300
        "
        >View on Github
        <svg
          class="ml-2 w-3 h-3"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path></svg
      ></a>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue'
import { Author, CommitInfo } from '~/types/commitInfo'

export default Vue.extend({
  props: {
    commits: {
      type: () => Object as CommitInfo[],
      required: true,
    },
  },
  methods: {
    getAvatarUrl(author: Author | null) {
      return author ? author.avatar_url : require('../assets/github-logo-blue.png')
    }
  },
})
</script>

<style scoped>
</style>