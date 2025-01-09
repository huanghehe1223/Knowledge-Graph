<script setup>
import { ref, onMounted,watch } from 'vue'

const props = defineProps({
  title: String,
  id: String,
  active: Boolean,
})

const accordionOpen = ref(false)

watch(() => props.active, (newValue) => {
  accordionOpen.value = newValue
})

onMounted(() => {
  accordionOpen.value = props.active
})
</script>

<template>
  <div
    class="relative bg-white/70 shadow shadow-black/[0.03] rounded-lg before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
    <h2>
      <button :id="`accordion-title-${id}`"
        class="flex items-center justify-between w-full font-semibold text-left px-4 py-3"
        @click="accordionOpen = !accordionOpen" :aria-expanded="accordionOpen" :aria-controls="`accordion-text-${id}`">
        <span>{{ title }}</span>
        <span class="flex items-center justify-center h-5 w-5 rounded-full bg-white shadow-sm shrink-0 ml-8">
          <svg class="fill-gray-400 transform origin-center transition duration-200 ease-out"
            :class="{ '!rotate-180': accordionOpen }" xmlns="http://www.w3.org/2000/svg" width="10" height="6"
            fill="none">
            <path d="m2 .586 3 3 3-3L9.414 2 5.707 5.707a1 1 0 0 1-1.414 0L.586 2 2 .586Z" clip-rule="evenodd" />
          </svg>
        </span>
      </button>
    </h2>
    <div :id="`accordion-text-${id}`" role="region" :aria-labelledby="`accordion-title-${id}`"
      class="grid text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out"
      :class="accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
      <div class="overflow-hidden">
        <p class="px-4 pb-3">
          <slot />
        </p>
      </div>
    </div>
  </div>
</template>
