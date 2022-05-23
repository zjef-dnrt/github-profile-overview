<template>
  <div class="my-4 glass-effect rounded-md px-5 py-8">
    <p v-if="$fetchState.pending">Loading commits...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1 class="text-gray-200 tracking-wide">{{ fullName }}</h1>
      <button class="button--light w-56 my-4" @click="$fetch">Refresh</button>
      <VerticalCommitsTimeline :commits="commits" />
    </div>
  </div>
</template>

<script lang="ts">
import { mapWritableState } from 'pinia'
import Vue from 'vue'
import { useCommitsStore } from '~/store/commitsStore'

export default Vue.extend({
  asyncData({ params: { fullName } }) {
    return { fullName }
  },
  data() {
    return {
      pageNumber: 1,
    }
  },
  fetch() {
    this.fetchCommits()
    this.pageNumber = 1
  },
  computed: {
    ...mapWritableState(useCommitsStore, ['commits']),
  },
  beforeMount() {
    window.addEventListener('scroll', this.checkScrollPosition)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScrollPosition)
  },
  methods: {
    fetchMoreCommits() {
      this.pageNumber += 1
      this.fetchCommits(this.pageNumber)
    },
    async fetchCommits(page: Number = 1) {
      const { data } = await this.$reposAPI.get(`${this.fullName}/commits`, {
        params: {
          per_page: 20,
          page,
        },
      })

      if (page === 1) this.commits = data
      else this.commits.push(...data)
    },
    checkScrollPosition() {
      // Amount scrolled from top
      const scrollY = window.scrollY
      // Visible part of the screen that the user can see
      const innerHeight = window.innerHeight
      // Total scrollable document height
      const scrollHeight = document.documentElement.scrollHeight

      if (scrollY + innerHeight >= scrollHeight) this.fetchMoreCommits()
    },
  },
})
</script>
