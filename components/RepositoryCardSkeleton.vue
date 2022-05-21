<template>
  <div
    class="
      w-full
      h-96
      p-5
      flex flex-col
      justify-between
      rounded-lg
      shadow-sm
      bg-white
    "
  >
    <div class="w-full flex justify-center">
      <vue-skeleton-loader
        type="rect"
        :width="160"
        :height="160"
        rounded
        animation="wave"
      />
    </div>
    <vue-skeleton-loader
      type="rect"
      :width="200"
      :height="25"
      rounded
      animation="wave"
    />
    <div class="grid gap-2">
      <vue-skeleton-loader
        type="rect"
        :width="350"
        :height="25"
        rounded
        animation="wave"
      />
      <vue-skeleton-loader
        type="rect"
        :width="350"
        :height="25"
        rounded
        animation="wave"
      />
      <div class="flex w-1/2 justify-between">
        <vue-skeleton-loader
          type="rect"
          :width="55"
          :height="25"
          rounded
          animation="wave"
        />
        <vue-skeleton-loader
          type="rect"
          :width="55"
          :height="25"
          rounded
          animation="wave"
        />
        <vue-skeleton-loader
          type="rect"
          :width="55"
          :height="25"
          rounded
          animation="wave"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueSkeletonLoader from 'skeleton-loader-vue'

export default Vue.extend({
  components: {
    VueSkeletonLoader
  },
})
</script>