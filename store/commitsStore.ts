import { defineStore } from "pinia";
import { CommitInfo } from "~/types/commitInfo";

export const useCommitsStore = defineStore('commits', {
  state: () => ({
    commits: [] as CommitInfo[],
  }),

  getters: {
    hasCommits: (state) =>
      state.commits.length > 0,
  },
})