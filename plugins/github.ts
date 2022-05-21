import { Context } from "@nuxt/types"

/* eslint-disable @typescript-eslint/no-unused-vars */
export default function({ $axios }: Context, inject: any) {
  const defaultConfig = {
    headers: {
      accept: 'application/vnd.github.v3+json',
    },
  };

  const usersAPI = $axios.create(defaultConfig)
  const reposAPI = $axios.create(defaultConfig)

  usersAPI.setBaseURL('https://api.github.com/users')
  reposAPI.setBaseURL('https://api.github.com/repos')

  inject('usersAPI', usersAPI)
  inject('reposAPI', reposAPI)
}