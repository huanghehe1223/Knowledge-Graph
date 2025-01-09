<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String
})

const dropdownOpen = ref(false)
</script>

<template>
  <li
    class="relative flex items-center gap-0.5 px-3 py-1"
    @mouseenter="dropdownOpen = true"
    @mouseleave="dropdownOpen = false"
    @focusin="dropdownOpen = true"
    @focusout="dropdownOpen = false"
  >
    <span class="text-gray-700 hover:text-gray-900 flex items-center cursor-pointer transition">{{ title }}</span>
    <button
      class="shrink-0 p-1"
      :aria-expanded="dropdownOpen"
      @click.prevent="dropdownOpen = !dropdownOpen"
    >
      <span class="sr-only">Show submenu for "{{ title }}"</span>
      <svg class="fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="10" height="6">
        <path d="m1.06.19 3.5 3.5 3.5-3.5 1.061 1.06-4.56 4.56L0 1.25 1.06.19Z" />
      </svg>
    </button>

    <Transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul v-show="dropdownOpen"
        class="origin-top-left absolute top-full left-0 w-36 bg-white p-2 rounded-xl shadow-lg shadow-black/[0.03] border border-gray-100">
        <slot />
      </ul>
    </Transition>
  </li>
</template>