<template>
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
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
  data() {
    return {
      profileName: '',
    }
  },
  methods: {
    fetchRepos() {
      console.log(this.profileName)
      // TODO DISPATCH STORE ACTION TO FETCH REPOS FOR USER

    },
  },
})
</script>
