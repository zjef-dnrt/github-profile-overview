import { defineStore } from 'pinia'
import { Repository } from '~/types/repository'

export const useReposStore = defineStore('repos', {
  state: () => ({
    repositories: [] as Repository[],
    selectedRepoName: '' as String,
    errorMessage: '' as String,
    isLoading: false as Boolean,
    repositoriesLoaded: false as Boolean,
  }),

  getters: {
    hasRepositories: (state) =>
      state.repositoriesLoaded && state.repositories.length > 0,
  },

  actions: {
    async fetchRepos(profileName: string): Promise<void> {
      this.isLoading = true
      this.repositoriesLoaded = false
      this.errorMessage = ''

      try {
        const { data } = await this.$nuxt.$usersAPI.get(`${profileName}/repos`)

        this.repositories = data as Repository[]
        this.repositoriesLoaded = true
      } catch (error: any) {
        this.repositoriesLoaded = false

        const isNotFoundError = error.response?.status === 404
        this.errorMessage = isNotFoundError
          ? 'User not found'
          : 'Something went wrong'
      } finally {
        this.isLoading = false
      }
    },
    setSelectedRepoName(newSelectedRepoName: String): void {
      this.selectedRepoName = newSelectedRepoName
    },
  },
})
