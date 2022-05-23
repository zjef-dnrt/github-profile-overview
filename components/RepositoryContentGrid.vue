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
      This user seems to have no repositories
    </div>

    <!-- [STATE] Default or Repos fetch failed -->
    <div v-else>
      <!-- Fetch failed -->
      <div v-if="errorMessage">
        {{ errorMessage }}
      </div>

      <!-- Default state -->
      <div v-else class="flex flex-col justify-center items-center">
        <img
          src="../assets/github-logo-blue.png"
          class="w-40 ml-5"
          alt="Github logo"
        />
        <p class="text-center text-2xl mt-8 text-gray-200">
          Enter a profile name and checkout the public repositories!
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'pinia'
import { useRepos } from '~/store/repositoriesStore'
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
    ...mapState(useRepos, [
      'repositories',
      'errorMessage',
      'repositoriesLoaded',
      'hasRepositories',
      'isLoading',
    ]),
    repoOwnerName() {
      const ownerName = this.repositories?.[0]?.owner.login
      return ownerName ? `${ownerName}'s repositories` : ''
    },
  },
})
</script>

<style scoped>
</style>