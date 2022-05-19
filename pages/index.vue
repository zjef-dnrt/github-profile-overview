<template>
  <div>
    <section class="px-5 py-6 bg-gray-300 shadow-md">
      <h3 class="mb-2">Git profile name</h3>
      <div>
        <input
          v-model="profileName"
          type="text"
          placeholder="e.g. TheAwesomeDev"
          class="w-full p-2 rounded shadow-sm mb-3"
        />
        <button
          class="button--dark"
          @click="fetchRepos"
          @keyup.enter="fetchRepos"
        >
          Show public repositories
        </button>
      </div>
    </section>
    <section class="pt-7 p-5">
      <h2 v-if="repoOwnerName" class="mb-3">{{ repoOwnerName }}</h2>
      <div class="grid">
        <article v-for="repo in repositories" :key="repo.id">
          {{ repo.name }}
        </article>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import dummyRepos from '../static/data/dummy_repositories.json';

export default Vue.extend({
  name: 'HomePage',
  data() {
    return {
      profileName: '',
      repositories: [],
    }
  },
  computed: {
    repoOwnerName() {
      const ownerName = this.repositories[0]?.owner.login;
      return ownerName ? `${ownerName}'s repositories` : "";
    }
  },
  mounted () {
    this.repositories = dummyRepos;
  },
  methods: {
    fetchRepos() {
      console.log(this.profileName)
      // TODO DISPATCH STORE ACTION TO FETCH REPOS FOR USER
    },
  },
})
</script>
