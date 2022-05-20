<template>
  <div>
    <section class="px-5 py-8 mt-3 glass-effect shadow-md rounded-md">
      <h3 class="mb-2 text-gray-200 uppercase tracking-widest">Git profile name</h3>
      <div class="laptop:flex">
        <input
          ref="focusInput"
          v-model="profileName"
          type="text"
          placeholder="e.g. TheAwesomeDev"
          class="w-full p-2 rounded shadow-sm mb-2 laptop:mb-0"
        />
        <loading-button
          content="Show public repositories"
          :loading="isLoading"
          :disabled="!profileName"
          @click="profileName && fetchRepos(profileName)"
          @enter="profileName && fetchRepos(profileName)"
        />
      </div>
    </section>
    <section class="pt-7 p-5 pb-20">

      <!-- [STATE] Loading -->
      <div v-if="isLoading" class="main-repos-grid">
        <repository-card-skeleton />
        <repository-card-skeleton />
        <repository-card-skeleton />
      </div>

      <!-- [STATE] Repos fetched successful -->
      <div v-else-if="hasRepositories">
        <h2 v-if="repoOwnerName" class="mb-7">{{ repoOwnerName }}</h2>
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

      <!-- [STATE] Repos fetch failed -->
      <div v-else>
        {{ errorOrEmptyPlaceholder }}
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'pinia'
import { useRepos } from '~/store/repositories'
import RepositoryCardSkeleton from '~/components/repository-card-skeleton.vue'

export default Vue.extend({
  name: 'HomePage',
  components: { RepositoryCardSkeleton },
  data() {
    return {
      profileName: '',
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
    errorOrEmptyPlaceholder() {
      return this.errorMessage
        ? this.errorMessage
        : 'Enter a Github profile name above and request the repositories'
    },
  },
  mounted() {
    this.$refs.focusInput.focus()
  },
  methods: {
    ...mapActions(useRepos, ['fetchRepos']),
  },
})
</script>

<style scoped>
.glass-effect {
   background-color: rgba(255, 255, 255, 0.24);
   border: 1px solid rgba(255, 255, 255, 0.125);
}
</style>
