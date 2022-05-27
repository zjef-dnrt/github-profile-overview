<template>
  <div class="mt-2 mb-4 glass-effect rounded-md px-5 py-8">
    <CommitsSkeleton v-if="$fetchState.pending" />
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1 class="text-gray-200 tracking-wide mb-4">{{ repositoryTitle }}</h1>
      <div class="flex flex-col">
        <SearchInput v-model="searchValue" class="w-96" />
        <button class="button--light w-56 my-4" @click="$fetch">Refresh</button>
      </div>
      <VerticalCommitsTimeline :commits="filteredCommits" />
    </div>
  </div>
</template>

<script lang="ts">
import { mapWritableState } from 'pinia'
import { defineComponent } from 'vue-demi'
import { useCommitsStore } from '~/store/commitsStore'
import { CommitInfo } from '~/types/commitInfo'

export default defineComponent({
  asyncData({ params: { name } }) {
    return { name }
  },
  data() {
    return {
      pageNumber: 1,
      searchValue: '',
    }
  },
  async fetch() {
    await this.fetchCommits()
    this.pageNumber = 1
  },
  computed: {
    ...mapWritableState(useCommitsStore, ['commits']),
    repositoryTitle() {
      const [profileName, repositoryName] = (this.name ?? '-/-').split('/')
      return `Commits for repository '${repositoryName}' from user ${profileName}`
    },
    filteredCommits() {
      const uppercaseSearchValue = this.searchValue.toLowerCase() as string

      return this.commits.filter(
        (commitInfo: CommitInfo) =>
          commitInfo.commit.author.name
            .toLowerCase()
            .includes(uppercaseSearchValue) ||
          commitInfo.commit.message
            .toLowerCase()
            .includes(uppercaseSearchValue) ||
          (commitInfo.commit.committer.date as unknown as string).includes(
            uppercaseSearchValue
          ) ||
          commitInfo.sha.includes(uppercaseSearchValue)
      )
    },
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
    async fetchCommits(page: Number = 1): Promise<void> {
      const { data } = await this.$reposAPI.get(`${this.name}/commits`, {
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

      if (scrollY > 0 && scrollY + innerHeight >= scrollHeight)
        this.fetchMoreCommits()
    },
  },
})
</script>
