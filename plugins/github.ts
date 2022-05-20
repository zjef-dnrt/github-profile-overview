import { Context } from "@nuxt/types"

/* eslint-disable @typescript-eslint/no-unused-vars */
export default function({ $axios }: Context, inject: any) {
  const usersAPI = $axios.create()
  const reposAPI = $axios.create()

  usersAPI.setBaseURL('https://api.github.com/users')
  reposAPI.setBaseURL('https://api.github.com/repos')

  inject('usersAPI', usersAPI)
  inject('reposAPI', reposAPI)
}