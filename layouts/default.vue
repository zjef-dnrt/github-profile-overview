<template>
  <div class="min-h-screen gradient-background">
    <NuxtLink
      to="/"
      class="h-16 bg-gray-700 flex px-5 items-center border-b-4 border-gray-500"
    >
      <h1 class="laptop:mx-auto laptop:w-10/12 desktop:w-8/12 text-gray-200">
        Github profile overview
      </h1>
    </NuxtLink>
    <main class="h-full pb-8 laptop:w-10/12 desktop:w-8/12 laptop:mx-auto">
      <transition name="slide-right"><Nuxt /></transition>
    </main>
  </div>
</template>

<style scoped>
.gradient-background {
  background: linear-gradient(300deg, deepskyblue, #1ba0fc, #005dff);
  background-size: 180% 180%;
  animation: gradient-animation 20s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.35s ease-in-out, transform 0.4s ease-in-out;
}
.slide-right-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}
</style>
