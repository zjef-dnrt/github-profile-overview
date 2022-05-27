import { defineStore } from "pinia";
import { CommitInfo } from "~/types/commitInfo";

type CommitsStoreType = {
  commits: CommitInfo[]
}

export const useCommitsStore = defineStore('commits', {
  state: () => ({
    commits: [] as CommitInfo[],
  } as CommitsStoreType),

  getters: {
    hasCommits: (state) =>
      state.commits.length > 0,
  },
})