<script setup>
import { ref, nextTick, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps(['id', 'searchId', 'modalOpen'])
const emit = defineEmits(['open-modal', 'close-modal'])

const modalContent = ref(null)
const searchInput = ref(null)

// close on click outside
const clickHandler = ({ target }) => {
  if (!props.modalOpen || modalContent.value.contains(target)) return
  emit('close-modal')
}

// close if the esc key is pressed
const keyHandler = ({ keyCode }) => {
  if (!props.modalOpen || keyCode !== 27) return
  emit('close-modal')
}

onMounted(() => {
  document.addEventListener('click', clickHandler)
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('click', clickHandler)
  document.removeEventListener('keydown', keyHandler)
})

watch(() => props.modalOpen, (open) => {
  open && nextTick(() => searchInput.value.focus())
})
</script>

<template>
  <!-- Modal backdrop -->
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-out duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-show="modalOpen" class="fixed inset-0 bg-gray-900 bg-opacity-20 z-50 transition-opacity" aria-hidden="true"></div>
  </transition>
  <!-- Modal dialog -->
  <transition
    enter-active-class="transition ease-in-out duration-200"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in-out duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div v-show="modalOpen" :id="id" class="fixed inset-0 z-50 overflow-hidden flex items-start top-20 md:top-28 mb-4 justify-center px-4 sm:px-6" role="dialog" aria-modal="true">
      <div ref="modalContent" class="bg-white overflow-auto max-w-2xl w-full max-h-full rounded-xl shadow-lg">
        <!-- Search form -->
        <form class="border-b border-gray-200">
          <div class="flex items-center">
            <label :for="searchId" class="sr-only">Search</label>
            <svg class="w-4 h-4 fill-gray-500 shrink-0 ml-4" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m14.707 13.293-1.414 1.414-2.4-2.4 1.414-1.414 2.4 2.4ZM6.8 12.6A5.8 5.8 0 1 1 6.8 1a5.8 5.8 0 0 1 0 11.6Zm0-2a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z" />
            </svg>
            <input :id="searchId" class="text-sm w-full bg-white border-0 focus:ring-transparent placeholder-gray-400 appearance-none py-3 pl-2 pr-4" type="search" placeholder="Search for anything…" ref="searchInput" />            
          </div>
        </form>
        <div class="p-2">
          <ul>
            <li>
              <router-link class="flex items-center px-2 py-1 leading-6 text-sm text-gray-700 hover:bg-gray-100 rounded-lg focus-within:bg-gray-100 outline-none" to="#0" @click="$emit('close-modal')">
                <svg class="w-3 h-3 fill-gray-400 shrink-0 mr-3" width="12" height="12" viewBox="0 0 12 12">
                  <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                </svg>
                <span>Alternative Schemas</span>
              </router-link>
            </li>
            <li>
              <router-link class="flex items-center px-2 py-1 leading-6 text-sm text-gray-700 hover:bg-gray-100 rounded-lg focus-within:bg-gray-100 outline-none" to="#0" @click="$emit('close-modal')">
                <svg class="w-3 h-3 fill-gray-400 shrink-0 mr-3" width="12" height="12" viewBox="0 0 12 12">
                  <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                </svg>
                <span>Query string parameters</span>
              </router-link>
            </li>            
            <li>
              <router-link class="flex items-center px-2 py-1 leading-6 text-sm text-gray-700 hover:bg-gray-100 rounded-lg focus-within:bg-gray-100 outline-none" to="#0" @click="$emit('close-modal')">
                <svg class="w-3 h-3 fill-gray-400 shrink-0 mr-3" width="12" height="12" viewBox="0 0 12 12">
                  <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                </svg>
                <span>Integrations</span>
              </router-link>
            </li>
            <li>
              <router-link class="flex items-center px-2 py-1 leading-6 text-sm text-gray-700 hover:bg-gray-100 rounded-lg focus-within:bg-gray-100 outline-none" to="#0" @click="$emit('close-modal')">
                <svg class="w-3 h-3 fill-gray-400 shrink-0 mr-3" width="12" height="12" viewBox="0 0 12 12">
                  <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                </svg>
                <span>Organize Contacts with Tags</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>