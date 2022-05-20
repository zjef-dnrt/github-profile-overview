import { defineStore } from 'pinia'
import { Repository } from '~/types/repository'

export const useRepos = defineStore('repos', {
  state: () => ({
    repositories: null as Repository[] | null,
  }),

  actions: {
    async fetchRepos(profileName: string) {
      try {
        const newRepositories = await this.$nuxt.$usersAPI.get(
          `${profileName}/repos`
        )
        this.repositories = newRepositories.data
      } catch (error) {
        console.error(error)
      }
    },
  },
})
