<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel, TransitionRoot } from '@headlessui/vue'

const selectedTab = ref(0)

function changeTab(index) {
  selectedTab.value = index
}
</script>

<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div>

        <!-- Tabs component -->
        <TabGroup :selectedIndex="selectedTab" @change="changeTab">

          <!-- Buttons -->
          <div class="flex justify-center">
            <TabList
              class="relative max-[480px]:max-w-[180px] inline-flex flex-wrap justify-center bg-white rounded-xl p-2 shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none mb-8 min-[480px]:mb-12">
              <!-- Button #1 -->
              <Tab as="template">
                <button
                  class="flex-1 flex items-center gap-2.5 text-sm font-medium h-8 px-3 rounded-lg whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 transition-colors"
                  :class="selectedTab === 0 ? 'bg-gray-800 text-gray-200' : 'text-gray-700'">
                  <svg class="fill-current" :class="selectedTab === 0 ? 'text-gray-400' : 'text-gray-500'"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
                  </svg>
                  <span>Startups</span>
                </button>
              </Tab>
              <!-- Button #2 -->
              <Tab as="template">
                <button
                  class="flex-1 flex items-center gap-2.5 text-sm font-medium h-8 px-3 rounded-lg whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 transition-colors"
                  :class="selectedTab === 1 ? 'bg-gray-800 text-gray-200' : 'text-gray-700'">
                  <svg class="fill-current" :class="selectedTab === 1 ? 'text-gray-400' : 'text-gray-500'"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path
                      d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.722.104-1.413.278-2.064a1 1 0 1 1 1.932.516A5.99 5.99 0 0 0 2 8a6 6 0 1 0 6-6c-.53 0-1.045.076-1.548.21A1 1 0 1 1 5.936.278Zm.132 7.204A2.003 2.003 0 0 0 8 10a2 2 0 1 0-.518-3.932L3.707 2.293a1 1 0 0 0-1.414 1.414l3.775 3.775Z" />
                  </svg>
                  <span>Web Apps</span>
                </button>
              </Tab>
              <!-- Button #3 -->
              <Tab as="template">
                <button
                  class="flex-1 flex items-center gap-2.5 text-sm font-medium h-8 px-3 rounded-lg whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 transition-colors"
                  :class="selectedTab === 2 ? 'bg-gray-800 text-gray-200' : 'text-gray-700'">
                  <svg class="fill-current" :class="selectedTab === 2 ? 'text-gray-400' : 'text-gray-500'"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path
                      d="M3 2a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0V2Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 0-2 0v12a1 1 0 1 0 2 0V2Z" />
                  </svg>
                  <span>eCommerce</span>
                </button>
              </Tab>
              <!-- Button #4 -->
              <Tab as="template">
                <button
                  class="flex-1 flex items-center gap-2.5 text-sm font-medium h-8 px-3 rounded-lg whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-blue-300 transition-colors"
                  :class="selectedTab === 3 ? 'bg-gray-800 text-gray-200' : 'text-gray-700'">
                  <svg class="fill-current" :class="selectedTab === 3 ? 'text-gray-400' : 'text-gray-500'"
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path
                      d="M.06 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 1 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331A2.162 2.162 0 0 1 .06 10.003Zm7.855-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33a.172.172 0 0 0 .17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.084 2.023a.172.172 0 0 0-.17-.001h.001ZM9.075.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.924.285a2.173 2.173 0 0 1 2.15 0h.001Z" />
                  </svg>
                  <span>Enteprise</span>
                </button>
              </Tab>
            </Tablist>
          </div>

          <TabPanels class="relative flex items-center justify-center h-[324px]">
            <!-- Small blue dots -->
            <div class="absolute -z-10">
              <svg class="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width="164" height="41" viewBox="0 0 164 41"
                fill="none">
                <circle cx="1" cy="8" r="1" fill-opacity="0.24" />
                <circle cx="1" cy="1" r="1" fill-opacity="0.16" />
                <circle cx="1" cy="15" r="1" />
                <circle cx="1" cy="26" r="1" fill-opacity="0.64" />
                <circle cx="1" cy="33" r="1" fill-opacity="0.24" />
                <circle cx="8" cy="8" r="1" />
                <circle cx="8" cy="15" r="1" />
                <circle cx="8" cy="26" r="1" fill-opacity="0.24" />
                <circle cx="15" cy="15" r="1" fill-opacity="0.64" />
                <circle cx="15" cy="26" r="1" fill-opacity="0.16" />
                <circle cx="8" cy="33" r="1" />
                <circle cx="1" cy="40" r="1" />
                <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 7)" fill-opacity="0.24" />
                <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 0)" fill-opacity="0.16" />
                <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 14)" />
                <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 25)" fill-opacity="0.64" />
                <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 32)" fill-opacity="0.24" />
                <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 157 7)" />
                <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 157 14)" />
                <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 157 25)" fill-opacity="0.24" />
                <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 150 14)" fill-opacity="0.64" />
                <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 150 25)" fill-opacity="0.16" />
                <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 157 32)" />
                <circle cx="1" cy="1" r="1" transform="matrix(-1 0 0 1 164 39)" />
              </svg>
            </div>
            <!-- Blue glow -->
            <div class="absolute -z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="432" height="160" viewBox="0 0 432 160" fill="none">
                <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                  <path class="fill-blue-500" fill-rule="evenodd" clip-rule="evenodd"
                    d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z" />
                </g>
                <defs>
                  <filter id="filter0_f_2044_9" x="0" y="0" width="432" height="160" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="32" result="effect1_foregroundBlur_2044_9" />
                  </filter>
                </defs>
              </svg>
            </div>
            <!-- Horizontal lines -->
            <div
              class="absolute -z-10 inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply">
            </div>
            <div
              class="absolute -z-10 inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mix-blend-multiply">
            </div>
            <div
              class="absolute -z-10 inset-x-[200px] top-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent mix-blend-multiply">
            </div>
            <div
              class="absolute -z-10 inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-[82px] before:absolute before:inset-y-0 before:w-24 before:bg-gradient-to-r before:via-blue-500 before:animate-[line_10s_ease-in-out_infinite_both] mix-blend-multiply">
            </div>
            <div
              class="absolute -z-10 inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent translate-y-[82px] before:absolute before:inset-y-0 before:w-24 before:bg-gradient-to-r before:via-blue-500 before:animate-[line_10s_ease-in-out_infinite_5s_both] mix-blend-multiply">
            </div>
            <!-- Diagonal lines -->
            <div
              class="absolute -z-10 inset-x-[300px] top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent rotate-[20deg] mix-blend-multiply">
            </div>
            <div
              class="absolute -z-10 inset-x-[300px] top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent -rotate-[20deg] mix-blend-multiply">
            </div>
            <!-- Vertical lines -->
            <div
              class="absolute -z-10 inset-y-0 left-1/2 w-px bg-gradient-to-b from-gray-200 to-transparent -translate-x-[216px] mix-blend-multiply">
            </div>
            <div
              class="absolute -z-10 inset-y-0 left-1/2 w-px bg-gradient-to-t from-gray-200 to-transparent translate-x-[216px] mix-blend-multiply">
            </div>
            <!-- Logos -->
            <div
              class="absolute before:absolute before:-inset-3 before:rounded-full before:[background:conic-gradient(from_180deg,transparent,theme(colors.blue.500))_border-box] before:border before:border-transparent before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:animate-[spin_3s_linear_infinite]">
              <div class="animate-[breath_8s_ease-in-out_infinite_both]">
                <div
                  class="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                  <img class="relative" src="../images/logo-01.svg" width="32" height="32" alt="Logo 01" />
                </div>
              </div>
            </div>
            <!-- Panel #1 -->
            <TabPanel
              :static="true"
              class="focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
              :class="selectedTab !== 0 ? 'order-first' : ''"
            >
              <TransitionRoot
                class="w-full h-full flex items-center justify-center"
                :show="selectedTab === 0"
                enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-125"
              >
                <div class="absolute -translate-x-[136px]">
                  <div class="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-02.svg" width="23" height="22" alt="Logo 02" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[136px]">
                  <div class="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-03.svg" width="22" height="22" alt="Logo 03" />
                    </div>
                  </div>
                </div>
                <div class="absolute -translate-x-[216px] -translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-04.svg" width="24" height="22" alt="Logo 04" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[216px] -translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-05.svg" width="25" height="25" alt="Logo 05" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[216px] translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-06.svg" width="20" height="18" alt="Logo 06" />
                    </div>
                  </div>
                </div>
                <div class="absolute -translate-x-[216px] translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-07.svg" width="25" height="25" alt="Logo 07" />
                    </div>
                  </div>
                </div>
                <div class="absolute -translate-x-[292px] opacity-40">
                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                      <img class="relative" src="../images/logo-08.svg" width="20" height="20" alt="Logo 08" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[292px] opacity-40">
                  <div class="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                      <img class="relative" src="../images/logo-09.svg" width="21" height="13" alt="Logo 09" />
                    </div>
                  </div>
                </div>
              </TransitionRoot>
            </TabPanel>
            <!-- Panel #2 -->
            <TabPanel
              :static="true"
              class="focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
              :class="selectedTab !== 1 ? 'order-first' : ''"
            >
              <TransitionRoot
                class="w-full h-full flex items-center justify-center"
                :show="selectedTab === 1"
                enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-125"
              >
                <div class="absolute -translate-x-[136px]">
                  <div class="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-03.svg" width="23" height="22" alt="Logo 03" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[136px]">
                  <div class="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-04.svg" width="22" height="22" alt="Logo 04" />
                    </div>
                  </div>
                </div>
                <div class="absolute -translate-x-[216px] -translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-05.svg" width="24" height="22" alt="Logo 05" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[216px] -translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-02.svg" width="25" height="25" alt="Logo 02" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[216px] translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-07.svg" width="20" height="18" alt="Logo 07" />
                    </div>
                  </div>
                </div>
                <div class="absolute -translate-x-[216px] translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-06.svg" width="25" height="25" alt="Logo 06" />
                    </div>
                  </div>
                </div>
                <div class="absolute -translate-x-[292px] opacity-40">
                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                      <img class="relative" src="../images/logo-09.svg" width="20" height="20" alt="Logo 09" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[292px] opacity-40">
                  <div class="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                      <img class="relative" src="../images/logo-08.svg" width="21" height="13" alt="Logo 08" />
                    </div>
                  </div>
                </div>
              </TransitionRoot>
            </TabPanel>
            <!-- Panel #3 -->
            <TabPanel
              :static="true"
              class="focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
              :class="selectedTab !== 2 ? 'order-first' : ''"
            >
              <TransitionRoot
                class="w-full h-full flex items-center justify-center"
                :show="selectedTab === 2"
                enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-125"
              >
                <div class="absolute -translate-x-[136px]">
                  <div class="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-02.svg" width="23" height="22" alt="Logo 02" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[136px]">
                  <div class="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-03.svg" width="22" height="22" alt="Logo 03" />
                    </div>
                  </div>
                </div>
                <div class="absolute -translate-x-[216px] -translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-04.svg" width="24" height="22" alt="Logo 04" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[216px] -translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-05.svg" width="25" height="25" alt="Logo 05" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[216px] translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-06.svg" width="20" height="18" alt="Logo 06" />
                    </div>
                  </div>
                </div>
                <div class="absolute -translate-x-[216px] translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-07.svg" width="25" height="25" alt="Logo 07" />
                    </div>
                  </div>
                </div>
                <div class="absolute -translate-x-[292px] opacity-40">
                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                      <img class="relative" src="../images/logo-08.svg" width="20" height="20" alt="Logo 08" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[292px] opacity-40">
                  <div class="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                      <img class="relative" src="../images/logo-09.svg" width="21" height="13" alt="Logo 09" />
                    </div>
                  </div>
                </div>
              </TransitionRoot>
            </TabPanel>
            <!-- Panel #4 -->
            <TabPanel
              :static="true"
              class="focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
              :class="selectedTab !== 3 ? 'order-first' : ''"
            >
              <TransitionRoot
                class="w-full h-full flex items-center justify-center"
                :show="selectedTab === 3"
                enter="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-700 transform"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="transition ease-[cubic-bezier(0.38,0,0.32,1)] duration-300 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-125"
              >
                <div class="absolute -translate-x-[136px]">
                  <div class="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-03.svg" width="23" height="22" alt="Logo 03" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[136px]">
                  <div class="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-04.svg" width="22" height="22" alt="Logo 04" />
                    </div>
                  </div>
                </div>
                <div class="absolute -translate-x-[216px] -translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-05.svg" width="24" height="22" alt="Logo 05" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[216px] -translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-02.svg" width="25" height="25" alt="Logo 02" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[216px] translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-07.svg" width="20" height="18" alt="Logo 07" />
                    </div>
                  </div>
                </div>
                <div class="absolute -translate-x-[216px] translate-y-[82px]">
                  <div class="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:bg-gray-200/60 before:border before:border-gray-700/5 before:rounded-[inherit] before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <img class="relative" src="../images/logo-06.svg" width="25" height="25" alt="Logo 06" />
                    </div>
                  </div>
                </div>
                <div class="absolute -translate-x-[292px] opacity-40">
                  <div class="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                      <img class="relative" src="../images/logo-09.svg" width="20" height="20" alt="Logo 09" />
                    </div>
                  </div>
                </div>
                <div class="absolute translate-x-[292px] opacity-40">
                  <div class="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                    <div
                      class="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200/60">
                      <img class="relative" src="../images/logo-08.svg" width="21" height="13" alt="Logo 08" />
                    </div>
                  </div>
                </div>
              </TransitionRoot>
            </TabPanel>
          </TabPanels>

        </TabGroup>
        <!-- End: Tabs component -->

      </div>
    </div>
  </section>
</template>
