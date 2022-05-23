<template>
  <ol
    class="
      relative
      ml-7
      mt-7
      border-l border-gray-200
      dark:border-gray-700
      transition-all
      duration-1000
    "
  >
    <li v-for="index in [1, 2]" :key="index" class="mb-20 ml-4">
      <div
        class="
          absolute
          w-3
          h-3
          bg-gray-200
          rounded-full
          mt-1.5
          -left-1.5
          border border-white
        "
      ></div>
      <vue-skeleton-loader
        type="rect"
        :width="160"
        :height="25"
        rounded
        animation="wave"
      />
      <div class="mt-2 mb-3 flex items-center">
        <vue-skeleton-loader
          type="circle"
          :width="50"
          :height="50"
          animation="wave"
        />
        <vue-skeleton-loader
          type="rect"
          :width="200"
          :height="25"
          class="ml-4"
          rounded
          animation="wave"
        />
      </div>
      <vue-skeleton-loader
        type="rect"
        :width="350"
        :height="25"
        class="mt-5"
        rounded
        animation="wave"
      />
      <vue-skeleton-loader
        type="rect"
        :width="150"
        :height="30"
        class="mt-4"
        rounded
        animation="wave"
      />
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue'
import VueSkeletonLoader from 'skeleton-loader-vue'

export default Vue.extend({
  components: {
    VueSkeletonLoader,
  },
})
</script>