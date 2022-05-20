<template>
  <div>
    <section class="px-5 py-8 bg-gray-300 shadow-md rounded-b-md">
      <h3 class="mb-2">Git profile name</h3>
      <div class="laptop:flex">
        <input
          v-model="profileName"
          type="text"
          placeholder="e.g. TheAwesomeDev"
          class="w-full p-2 rounded shadow-sm mb-2 laptop:mb-0"
        />
        <button
          class="button--dark laptop:ml-4 laptop:w-72"
          @click="profileName && fetchRepos(profileName)"
          @keyup.enter="profileName && fetchRepos(profileName)"
        >
          Show public repositories
        </button>
      </div>
    </section>
    <section v-if="repositories" class="pt-7 p-5">
      <h2 v-if="repoOwnerName" class="mb-7">{{ repoOwnerName }}</h2>
      <div
        class="grid place-items-center grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-5"
      >
        <RepositoryCard
          v-for="repo in repositories"
          :key="repo.id"
          :repo="repo"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import dummyRepos from '../static/data/dummy_repositories.json';
import { mapActions, mapState } from 'pinia'
import RepositoryCard from '~/components/repository-card.vue'
import { useRepos } from '~/store/repositories'

export default Vue.extend({
  name: 'HomePage',
  components: { RepositoryCard },
  data() {
    return {
      profileName: '',
    }
  },
  computed: {
    ...mapState(useRepos, ['repositories']),
    repoOwnerName() {
      const ownerName = this.repositories[0]?.owner.login
      return ownerName ? `${ownerName}'s repositories` : ''
    },
  },
  methods: {
    ...mapActions(useRepos, ['fetchRepos']),
  },
})
</script>
