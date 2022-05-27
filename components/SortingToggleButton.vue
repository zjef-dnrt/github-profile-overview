<template>
  <button
    type="button"
    class="
      w-28
      py-2.5
      px-5
      mr-2
      mb-2
      text-sm
      font-medium
      focus:outline-none
      rounded-lg
      shadow-sm
      flex
      justify-center
      border
      text-white
      focus:ring-gray-700
      transition-all
      duration-300
    "
    :class="{
      'bg-gray-200 text-gray-800 hover:bg-gray-50':
        sortState > 0,
    }"
    @click="handleClick"
  >
    <img
      v-if="sortState !== 0"
      :src="sortDirArrow"
      class="mr-4"
      width="16"
      height="16"
      alt="Sorting direction arrow"
    />
    {{ content }}
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export enum SORT_DIRECTION {
  OFF,
  ASC,
  DESC,
}

export default Vue.extend({
  props: {
    content: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      sortState: SORT_DIRECTION.OFF,
    }
  },
  computed: {
    sortDirArrow(): any {
      return require(`../assets/arrow-${
        this.sortState === SORT_DIRECTION.ASC ? 'down' : 'up'
      }.svg`)
    },
  },
  methods: {
    handleClick() {
      if (this.sortState < 2) this.sortState += 1
      else this.sortState = 0

      this.$emit('click', this.sortState)
    },
  },
})
</script>