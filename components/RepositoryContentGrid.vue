<template>
  <section class="pt-7 p-5 pb-20">
    <!-- [STATE] Loading -->
    <div v-if="isLoading" class="main-repos-grid">
      <repository-card-skeleton />
      <repository-card-skeleton />
      <repository-card-skeleton />
    </div>

    <!-- [STATE] Repos fetched successful -->
    <div v-else-if="hasRepositories">
      <h2 v-if="repoOwnerName" class="mb-7 text-gray-200">
        {{ repoOwnerName }}
      </h2>
      <div class="main-repos-grid">
        <RepositoryCard
          v-for="repo in repositories"
          :key="repo.id"
          :repo="repo"
        />
      </div>
    </div>

    <!-- [STATE] Repos fetched successfull, user has no repos -->
    <div v-else-if="repositoriesLoaded">
      <StateContentPlaceholder
        asset="empty-box.svg"
        label="This Github profile doesn't seem to have public repositories... Maybe check the spelling or try another one!"
      />
    </div>

    <!-- [STATE] Default or Repos fetch failed -->
    <div v-else>
      <!-- Fetch failed -->
      <div v-if="errorMessage">
        <StateContentPlaceholder
          asset="cloud-error.svg"
          label="Oops! Something went wrong while requesting the repositories, try again!"
        />
        <p class="text-white italic w-full text-center">
          ( Server response: {{ errorMessage }} )
        </p>
      </div>

      <!-- Default state -->
      <div v-else class="flex flex-col justify-center items-center">
        <StateContentPlaceholder
          asset="github-logo-blue.png"
          label="Enter a profile name and checkout the public repositories!"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'pinia'
import { useReposStore } from '~/store/repositoriesStore'
import RepositoryCardSkeleton from '~/components/RepositoryCardSkeleton.vue'

export default Vue.extend({
  components: { RepositoryCardSkeleton },
  data() {
    return {
      initialMessage:
        'Enter a Github profile name above and request the repositories',
    }
  },
  computed: {
    ...mapState(useReposStore, [
      'repositories',
      'errorMessage',
      'repositoriesLoaded',
      'hasRepositories',
      'isLoading',
    ]),
    repoOwnerName(): String {
      const ownerName = this.repositories?.[0]?.owner.login
      return ownerName ? `${ownerName}'s repositories` : ''
    },
  },
})
</script>

<style scoped>
</style>