// eslint-disable-next-line import/named
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import Vue from 'vue'

declare module '*.vue' {
  export default Vue
}

declare module 'nuxt-js/axios'

declare module '@nuxt/types' {
  interface Context {
    $usersAPI: NuxtAxiosInstance
    $reposAPI: NuxtAxiosInstance
  }
}
