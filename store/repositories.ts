import { defineStore } from 'pinia'
import { Repository } from '~/types/repository'

export const useRepos = defineStore('repos', {
  state: () => ({
    repositories: null as Repository[] | null,
    isLoading: false as Boolean
  }),

  actions: {
    async fetchRepos(profileName: string) {
      this.isLoading = true

      try {
        const newRepositories = await this.$nuxt.$usersAPI.get(
          `${profileName}/repos`
        )
        this.repositories = newRepositories.data
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false;
      }
    },
  },
})
