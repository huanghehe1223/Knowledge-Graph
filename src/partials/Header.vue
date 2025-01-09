<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Dropdown from './Dropdown.vue'

const mobileNavOpen = ref(false)
const mobileNav = ref(null)
const hamburger = ref(null)

const clickOutside = (e) => {
  if (!mobileNavOpen.value || mobileNav.value.contains(e.target) || hamburger.value.contains(e.target)) return
  mobileNavOpen.value = false
}

const keyPress = ({ keyCode }) => {
  if (!mobileNavOpen.value || keyCode !== 27) return
  mobileNavOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', clickOutside)
  document.addEventListener('keydown', keyPress)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', clickOutside)
  document.removeEventListener('keydown', keyPress)
})
</script>

<template>
  <header class="fixed top-2 md:top-6 w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div
        class="relative flex items-center justify-between gap-3 h-14 rounded-2xl px-3 backdrop-blur-sm bg-white/90 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">

        <!-- Site branding -->
        <div class="flex-1 flex items-center">
          <!-- Logo -->
          <router-link class="inline-flex" to="/" aria-label="Cruip">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28">
              <path class="fill-blue-500" fill-rule="evenodd"
                d="M15.052 0c6.914.513 12.434 6.033 12.947 12.947h-5.015a7.932 7.932 0 0 1-7.932-7.932V0Zm-2.105 22.985V28C6.033 27.487.513 21.967 0 15.053h5.015a7.932 7.932 0 0 1 7.932 7.932Z"
                clip-rule="evenodd" />
              <path class="fill-blue-300" fill-rule="evenodd"
                d="M0 12.947C.513 6.033 6.033.513 12.947 0v5.015a7.932 7.932 0 0 1-7.932 7.932H0Zm22.984 2.106h5.015C27.486 21.967 21.966 27.487 15.052 28v-5.015a7.932 7.932 0 0 1 7.932-7.932Z"
                clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">

          <!-- Desktop menu links -->
          <ul class="text-sm flex grow justify-center flex-wrap items-center gap-4 lg:gap-8">
            <li class="px-3 py-1">
              <router-link class="text-gray-700 hover:text-gray-900 flex items-center transition"
                to="/">首页</router-link>
            </li>
            <li class="px-3 py-1">
              <router-link class="text-gray-700 hover:text-gray-900 flex items-center transition"
                to="/customers">知识图谱展示</router-link>
            </li>
            <li class="px-3 py-1">
              <router-link class="text-gray-700 hover:text-gray-900 flex items-center transition"
                to="/support">实体关系提取</router-link>
            </li>
            <li class="px-3 py-1">
              <router-link class="text-gray-700 hover:text-gray-900 flex items-center transition"
                to="/documentation">Docs</router-link>
            </li>
            <!-- 1st level: hover -->
            <Dropdown title="Extra">
              <li>
                <router-link class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                  to="/support">Support center</router-link>
              </li>
              <li>
                <router-link class="text-sm text-gray-700 hover:bg-gray-100 flex py-1.5 px-2 rounded-lg"
                  to="/apps">Apps</router-link>
              </li>
            </Dropdown>
          </ul>

        </nav>

        <!-- Desktop sign in links -->
        <ul class="flex-1 flex justify-end items-center gap-3">
          <li>
            <router-link class="btn-sm text-gray-800 bg-white hover:bg-gray-50 shadow" to="/signin">Login</router-link>
          </li>
          <li>
            <router-link class="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow" to="/signup">Register</router-link>
          </li>
        </ul>

        <!-- Mobile menu -->
        <div class="flex md:hidden">

          <!-- Hamburger button -->
          <button
            class="group inline-flex w-8 h-8 text-gray-800 bg-white text-center items-center justify-center transition"
            ref="hamburger"
            :class="{ active: mobileNavOpen }"
            aria-controls="mobile-nav"
            :aria-expanded="mobileNavOpen"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <svg class="w-4 h-4 fill-current pointer-events-none" viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg">
              <rect
                class="origin-center group-[[aria-expanded=true]]:rotate-[315deg] group-[[aria-expanded=true]]:[y:7] group-[[aria-expanded=true]]:[x:0] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
                y="2" x="7" width="9" height="2" rx="1"></rect>
              <rect
                class="origin-center group-[[aria-expanded=true]]:rotate-45 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)]"
                y="7" width="16" height="2" rx="1"></rect>
              <rect
                class="origin-center group-[[aria-expanded=true]]:rotate-[135deg] group-[[aria-expanded=true]]:[y:7] group-[[aria-expanded=true]]:[x:0] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)]"
                y="12" width="9" height="2" rx="1"></rect>
            </svg>
          </button>

          <!-- Mobile navigation -->
          <Transition
            enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <nav id="mobile-nav" ref="mobileNav" v-show="mobileNavOpen"
              class="absolute top-full z-20 left-0 w-full bg-white rounded-xl shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
              <ul class="text-sm p-2">
                <li>
                  <router-link class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2" to="/pricing">Pricing</router-link>
                </li>
                <li>
                  <router-link class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2" to="/customers">Customers</router-link>
                </li>
                <li>
                  <router-link class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2" to="/blog">Blog</router-link>
                </li>
                <li>
                  <router-link class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2" to="/documentation">Docs</router-link>
                </li>
                <li>
                  <router-link class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2" to="/support">Support center</router-link>
                </li>
                <li>
                  <router-link class="flex text-gray-700 hover:bg-gray-100 rounded-lg py-1.5 px-2" to="/apps">Apps</router-link>
                </li>
              </ul>
            </nav>
          </Transition>

        </div>

      </div>
    </div>
  </header>
</template>
