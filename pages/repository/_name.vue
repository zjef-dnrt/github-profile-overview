<template>
  <div class="my-4 glass-effect rounded-md px-5 py-8">
    <p v-if="$fetchState.pending">Loading commits...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1 class="text-gray-200 tracking-wide">{{ fullName }}</h1>
      <VerticalCommitsTimeline :commits="commits" />
      <button @click="$fetch">Refresh</button>
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
  async fetch() {
    const { data } = await this.$reposAPI.get(`${this.fullName}/commits`)
    this.commits = data
  },
  computed: {
    ...mapWritableState(useCommitsStore, ['commits']),
  },
})
</script>
