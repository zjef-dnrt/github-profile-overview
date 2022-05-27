// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import Vue from 'vue'
import { CommitInfo } from './types/commitInfo'
import { Repository } from './types/repository'

declare module '*.vue' {
  export default Vue
}

declare module '@nuxt/types' {
  interface Context {
    $usersAPI: NuxtAxiosInstance
    $reposAPI: NuxtAxiosInstance
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $usersAPI: NuxtAxiosInstance
    $reposAPI: NuxtAxiosInstance
    name: string
    commits: CommitInfo[]
    modelValue: string
    repo: Repository
    repositories: Repository[]
    setSelectedRepository: () => void
  }
}

declare namespace JSX {
  interface Element {}
  interface IntrinsicElements {
    div: any
  }
}
