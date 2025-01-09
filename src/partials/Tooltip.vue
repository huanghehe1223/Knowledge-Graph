<script setup>
import { ref } from 'vue'

const props = defineProps({
  content: String,
  id: String,
})

const open = ref(false)
</script>

<template>
  <div class="relative">
    <button
      class="block text-left text-gray-500 underline decoration-dotted decoration-gray-300 underline-offset-4 cursor-help"
      :aria-describedby="`tooltip-${id}`"
      @mouseenter="open = true"
      @mouseleave="open = false"
      @focus="open = true"
      @focusout="open = false"
      @click.prevent
    >
      <slot />
    </button>
    <div :id="`tooltip-${id}`" role="tooltip" class="z-10 absolute top-full left-0">
      <transition
        enter-active-class="transition ease-out duration-200 transform"
        enter-from-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-out duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >      
        <div class="w-[12.5rem] text-xs bg-gray-800 text-gray-200 border border-gray-200 p-2 rounded shadow-lg overflow-hidden mt-1" v-show="open">
          {{ content }}
        </div>
      </transition>
    </div>
  </div>
</template>
