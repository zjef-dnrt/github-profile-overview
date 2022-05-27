import { defineStore } from 'pinia'
import { Repository } from '~/types/repository'

type RepositoryStoreType = {
  repositories: Repository[]
  errorMessage: string
  isLoading: boolean
  repositoriesLoaded: boolean
}

export const useReposStore = defineStore('repos', {
  state: () =>
    ({
      repositories: [],
      errorMessage: '',
      isLoading: false,
      repositoriesLoaded: false,
    } as RepositoryStoreType),

  getters: {
    hasRepositories: (state: RepositoryStoreType) =>
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
  },
})
