<template>
  <section class="px-5 py-8 mt-3 glass-effect shadow-md rounded-md">
    <h3 class="mb-2 text-gray-200 uppercase tracking-widest">
      Git profile name
    </h3>
    <div class="laptop:flex">
      <input
        ref="focusInput"
        v-model="profileName"
        type="text"
        placeholder="e.g. TheAwesomeDev"
        class="w-full p-2 rounded shadow-sm mb-2 laptop:mb-0"
        @keyup.enter="profileName && fetchRepos(profileName)"
      />
      <LoadingButton
        content="Show public repositories"
        :loading="isLoading"
        :disabled="!profileName"
        @click="fetchRepos(profileName)"
        @enter="fetchRepos(profileName)"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'pinia'
import { useReposStore } from '~/store/repositoriesStore'
import LoadingButton from "~/components/LoadingButton.vue"

export default Vue.extend({
  name: "SearchToolbar",
  components: {
    LoadingButton,
  },
  data() {
    return {
      profileName: '',
    }
  },
  computed: {
    ...mapState(useReposStore, ['isLoading']),
  },
  mounted() {
    const focusInput = this.$refs.focusInput as HTMLElement | null;
    focusInput?.focus()
  },
  methods: {
    ...mapActions(useReposStore, ['fetchRepos']),
  },
})
</script>