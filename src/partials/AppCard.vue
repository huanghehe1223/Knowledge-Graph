<script setup>
const props = defineProps(['app'])
</script>

<template>
  <article
    class="group relative flex flex-col rounded-2xl w-full p-5 shadow-lg bg-white/70 hover:bg-white transition shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
    <svg class="absolute top-5 right-5 group-hover:rotate-45 transition-transform" xmlns="http://www.w3.org/2000/svg"
      width="9" height="9">
      <path class="fill-gray-400" d="M1.065 9 0 7.93l6.456-6.46H1.508L1.519 0H9v7.477H7.516l.011-4.942L1.065 9Z" />
    </svg>
    <div class="inline-flex mb-3">
      <div class="relative">
        <img class="rounded-full shadow-lg shadow-black/[0.03]" :src="props.app.image" width="48" height="48" :alt="props.app.name">
        <img v-if="props.app.badge" class="absolute top-0 right-0" src="../images/badge.svg" width="16" height="16" alt="Badge" aria-hidden="true">
      </div>
    </div>
    <h3 class="mb-1">
      <a class="font-bold before:absolute before:inset-0" :href="props.app-link">{{ props.app.name }}</a>
    </h3>
    <p class="text-sm text-gray-700">{{ props.app.description }}</p>
  </article>
</template>