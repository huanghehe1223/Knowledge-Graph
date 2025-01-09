<script setup>
import Tooltip from './../partials/Tooltip.vue'
</script>

<template>
  <section>
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6">
      <div class="pb-12 md:pb-20">

        <div class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-5 md:-mx-6 max-md:gap-6">

          <!-- Column with labels -->
          <section
            class="md:contents [&>div:first-child]:pt-5 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:rounded-b-2xl md:[&>div:last-child>div]:border-none">
            <!-- Empty cell -->
            <div></div>
            <!-- # Key features -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-1" aria-hidden="true">
              <div class="font-bold mb-2 mt-5">Key features</div>
            </div>
            <!-- Translated Words -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-2" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="01" content="Apply visual attributes to refine your designs and focus on relevant insights.">
                  Translated Words
                </Tooltip>
              </div>
            </div>
            <!-- Search Page Limit -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-3" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="02" content="Apply visual attributes to refine your designs and focus on relevant insights.">
                  Search Page Limit
                </Tooltip>
              </div>
            </div>
            <!-- Custom Fonts -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-4" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="03" content="Apply visual attributes to refine your designs and focus on relevant insights.">
                  Custom Fonts
                </Tooltip>
              </div>
            </div>
            <!-- Code Editor -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-5" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="04" content="Apply visual attributes to refine your designs and focus on relevant insights.">
                  Code Editor
                </Tooltip>
              </div>
            </div>
            <!-- # Hosting -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-6" aria-hidden="true">
              <div class="font-bold mb-2 mt-5">Hosting</div>
            </div>
            <!-- Bandwidth -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-7" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="06" content="Apply visual attributes to refine your designs and focus on relevant insights.">
                  Bandwidth
                </Tooltip>
              </div>
            </div>
            <!-- Visitors -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-8" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="07" content="Apply visual attributes to refine your designs and focus on relevant insights.">
                  Visitors
                </Tooltip>
              </div>
            </div>
            <!-- Max Upload Size -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-9" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="08" content="Apply visual attributes to refine your designs and focus on relevant insights.">
                  Max Upload Size
                </Tooltip>
              </div>
            </div>
            <!-- SSL Certificate -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-10" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="09" content="Apply visual attributes to refine your designs and focus on relevant insights.">
                  SSL Certificate
                </Tooltip>
              </div>
            </div>
            <!-- # Creation -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-11" aria-hidden="true">
              <div class="font-bold mb-2 mt-5">Creation</div>
            </div>
            <!-- Created Words -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-12" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="11" content="Apply visual attributes to refine your designs and focus on relevant insights.">
                  Created Words
                </Tooltip>
              </div>
            </div>
            <!-- Team Projects -->
            <div class="px-6 flex flex-col justify-end max-md:hidden md:order-[13]" aria-hidden="true">
              <div class="py-4 text-sm border-b border-gray-200">
                <Tooltip id="12" content="Apply visual attributes to refine your designs and focus on relevant insights.">
                  Team Projects
                </Tooltip>
              </div>
            </div>
          </section>
          <!-- End: Column with labels -->

          <!-- Hobby table -->
          <section
            class="md:contents [&>div:first-child]:pt-5 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:rounded-b-2xl md:[&>div:last-child>div]:border-none">
            <div class="relative px-6 flex flex-col justify-end">
              <div class="grow">
                <div class="font-medium mb-5">Hobby</div>
                <div>
                  <a class="btn-sm py-1.5 rounded-lg text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full"
                    href="#0">Free trial</a>
                </div>
              </div>
            </div>
            <!-- # Key features -->
            <div class="px-6 flex flex-col justify-end md:order-1">
              <div class="font-bold mb-2 mt-5 md:sr-only">Key features</div>
            </div>
            <!-- Translated Words -->
            <div class="px-6 flex flex-col justify-end md:order-2">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                5,000 <span class="md:sr-only">Translated Words</span>
              </div>
            </div>
            <!-- Search Page Limit -->
            <div class="px-6 flex flex-col justify-end md:order-3">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                100 <span class="md:sr-only">Search Page Limit</span>
              </div>
            </div>
            <!-- Custom Fonts -->
            <div class="px-6 flex flex-col justify-end md:order-4">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z">
                  </path>
                </svg>
                <span class="md:sr-only">Custom Fonts</span>
              </div>
            </div>
            <!-- Code Editor -->
            <div class="px-6 flex flex-col justify-end md:order-5">
              <div class="max-md:sr-only flex items-center h-full text-sm border-b border-gray-200 py-4">
                <span class="md:sr-only">Code Editor</span>
              </div>
            </div>
            <!-- # Features -->
            <div class="px-6 flex flex-col justify-end md:order-6">
              <div class="font-bold mb-2 mt-5 md:sr-only">Features</div>
            </div>
            <!-- Bandwidth -->
            <div class="px-6 flex flex-col justify-end md:order-7">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                100MB <span class="md:sr-only">Bandwidth</span>
              </div>
            </div>
            <!-- Visitors -->
            <div class="px-6 flex flex-col justify-end md:order-8">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                1,000 <span class="md:sr-only">Visitors</span>
              </div>
            </div>
            <!-- Max Upload Size -->
            <div class="px-6 flex flex-col justify-end md:order-9">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                5MB <span class="md:sr-only">Max Upload Size</span>
              </div>
            </div>
            <!-- SSL Certificate -->
            <div class="px-6 flex flex-col justify-end md:order-10">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z">
                  </path>
                </svg>
                <span class="md:sr-only">SSL Certificate</span>
              </div>
            </div>
            <!-- # Creation -->
            <div class="px-6 flex flex-col justify-end md:order-11">
              <div class="font-bold mb-2 mt-5 md:sr-only">Creation</div>
            </div>
            <!-- Created Words -->
            <div class="px-6 flex flex-col justify-end md:order-12">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                Unlimited <span class="md:sr-only">Created Words</span>
              </div>
            </div>
            <!-- Team Projects -->
            <div class="px-6 flex flex-col justify-end md:order-[13]">
              <div class="max-md:sr-only flex items-center h-full text-sm border-b border-gray-200 py-4">
                <span class="md:sr-only">Team Projects</span>
              </div>
            </div>
          </section>
          <!-- End: Hobby table -->

          <!-- Basic table -->
          <section
            class="md:contents [&>div:first-child]:pt-5 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:rounded-b-2xl md:[&>div:last-child>div]:border-none">
            <div class="relative px-6 flex flex-col justify-end">
              <div class="grow">
                <div class="font-medium mb-5">Basic</div>
                <div>
                  <a class="btn-sm py-1.5 rounded-lg text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full"
                    href="#0">Free trial</a>
                </div>
              </div>
            </div>
            <!-- # Key features -->
            <div class="px-6 flex flex-col justify-end md:order-1">
              <div class="font-bold mb-2 mt-5 md:sr-only">Key features</div>
            </div>
            <!-- Translated Words -->
            <div class="px-6 flex flex-col justify-end md:order-2">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                15,000 <span class="md:sr-only">Translated Words</span>
              </div>
            </div>
            <!-- Search Page Limit -->
            <div class="px-6 flex flex-col justify-end md:order-3">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                1,000 <span class="md:sr-only">Search Page Limit</span>
              </div>
            </div>
            <!-- Custom Fonts -->
            <div class="px-6 flex flex-col justify-end md:order-4">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z">
                  </path>
                </svg>
                <span class="md:sr-only">Custom Fonts</span>
              </div>
            </div>
            <!-- Code Editor -->
            <div class="px-6 flex flex-col justify-end md:order-5">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z">
                  </path>
                </svg>
                <span class="md:sr-only">Code Editor</span>
              </div>
            </div>
            <!-- # Features -->
            <div class="px-6 flex flex-col justify-end md:order-6">
              <div class="font-bold mb-2 mt-5 md:sr-only">Features</div>
            </div>
            <!-- Bandwidth -->
            <div class="px-6 flex flex-col justify-end md:order-7">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                1GB <span class="md:sr-only">Bandwidth</span>
              </div>
            </div>
            <!-- Visitors -->
            <div class="px-6 flex flex-col justify-end md:order-8">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                10,000 <span class="md:sr-only">Visitors</span>
              </div>
            </div>
            <!-- Max Upload Size -->
            <div class="px-6 flex flex-col justify-end md:order-9">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                15MB <span class="md:sr-only">Max Upload Size</span>
              </div>
            </div>
            <!-- SSL Certificate -->
            <div class="px-6 flex flex-col justify-end md:order-10">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z">
                  </path>
                </svg>
                <span class="md:sr-only">SSL Certificate</span>
              </div>
            </div>
            <!-- # Creation -->
            <div class="px-6 flex flex-col justify-end md:order-11">
              <div class="font-bold mb-2 mt-5 md:sr-only">Creation</div>
            </div>
            <!-- Created Words -->
            <div class="px-6 flex flex-col justify-end md:order-12">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                Unlimited <span class="md:sr-only">Created Words</span>
              </div>
            </div>
            <!-- Team Projects -->
            <div class="px-6 flex flex-col justify-end md:order-[13]">
              <div class="max-md:sr-only flex items-center h-full text-sm border-b border-gray-200 py-4">
                <span class="md:sr-only">Team Projects</span>
              </div>
            </div>
          </section>
          <!-- End: Basic table -->

          <!-- Business table -->
          <section
            class="md:contents [&>div:first-child]:pt-5 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:rounded-b-2xl md:[&>div:last-child>div]:border-none [&>div]:bg-gray-800">
            <div class="relative px-6 flex flex-col justify-end">
              <div class="grow">
                <div class="text-gray-200 font-medium mb-5">Business</div>
                <div>
                  <a class="btn-sm py-1.5 rounded-lg text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full"
                    href="#0">Free trial</a>
                </div>
              </div>
            </div>
            <!-- # Key features -->
            <div class="px-6 flex flex-col justify-end md:order-1">
              <div class="text-gray-200 font-bold mb-2 mt-5 md:sr-only">Key features</div>
            </div>
            <!-- Translated Words -->
            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-2">
              <div class="h-full text-sm border-b border-gray-600 py-4">
                25,000 <span class="md:sr-only">Translated Words</span>
              </div>
            </div>
            <!-- Search Page Limit -->
            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-3">
              <div class="h-full text-sm border-b border-gray-600 py-4">
                Unlimited
              </div>
            </div>
            <!-- Custom Fonts -->
            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-4">
              <div class="flex items-center h-full text-sm border-b border-gray-600 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z">
                  </path>
                </svg>
                <span class="md:sr-only">Custom Fonts</span>
              </div>
            </div>
            <!-- Code Editor -->
            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-5">
              <div class="flex items-center h-full text-sm border-b border-gray-600 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z">
                  </path>
                </svg>
                <span class="md:sr-only">Code Editor</span>
              </div>
            </div>
            <!-- # Features -->
            <div class="px-6 flex flex-col justify-end md:order-6">
              <div class="text-gray-200 font-bold mb-2 mt-5 md:sr-only">Features</div>
            </div>
            <!-- Bandwidth -->
            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-7">
              <div class="h-full text-sm border-b border-gray-600 py-4">
                10GB <span class="md:sr-only">Bandwidth</span>
              </div>
            </div>
            <!-- Visitors -->
            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-8">
              <div class="h-full text-sm border-b border-gray-600 py-4">
                50,000 <span class="md:sr-only">Visitors</span>
              </div>
            </div>
            <!-- Max Upload Size -->
            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-9">
              <div class="h-full text-sm border-b border-gray-600 py-4">
                25MB <span class="md:sr-only">Max Upload Size</span>
              </div>
            </div>
            <!-- SSL Certificate -->
            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-10">
              <div class="flex items-center h-full text-sm border-b border-gray-600 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z">
                  </path>
                </svg>
                <span class="md:sr-only">SSL Certificate</span>
              </div>
            </div>
            <!-- # Creation -->
            <div class="px-6 flex flex-col justify-end md:order-11">
              <div class="text-gray-200 font-bold mb-2 mt-5 md:sr-only">Creation</div>
            </div>
            <!-- Created Words -->
            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-12">
              <div class="h-full text-sm border-b border-gray-600 py-4">
                Unlimited <span class="md:sr-only">Created Words</span>
              </div>
            </div>
            <!-- Team Projects -->
            <div class="text-gray-300 px-6 flex flex-col justify-end md:order-[13]">
              <div class="flex items-center h-full text-sm border-b border-gray-600 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z">
                  </path>
                </svg>
                <span class="md:sr-only">Team Projects</span>
              </div>
            </div>
          </section>
          <!-- End: Business table -->

          <!-- Enterprise table -->
          <section
            class="md:contents [&>div:first-child]:pt-5 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:rounded-b-2xl md:[&>div:last-child>div]:border-none">
            <div class="relative px-6 flex flex-col justify-end">
              <div class="grow">
                <div class="font-medium mb-5">Enterprise</div>
                <div>
                  <a class="btn-sm py-1.5 rounded-lg text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full"
                    href="#0">Free trial</a>
                </div>
              </div>
            </div>
            <!-- # Key features -->
            <div class="px-6 flex flex-col justify-end md:order-1">
              <div class="font-bold mb-2 mt-5 md:sr-only">Key features</div>
            </div>
            <!-- Translated Words -->
            <div class="px-6 flex flex-col justify-end md:order-2">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                50,000 <span class="md:sr-only">Translated Words</span>
              </div>
            </div>
            <!-- Search Page Limit -->
            <div class="px-6 flex flex-col justify-end md:order-3">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                Unlimited
              </div>
            </div>
            <!-- Custom Fonts -->
            <div class="px-6 flex flex-col justify-end md:order-4">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z">
                  </path>
                </svg>
                <span class="md:sr-only">Custom Fonts</span>
              </div>
            </div>
            <!-- Code Editor -->
            <div class="px-6 flex flex-col justify-end md:order-5">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z">
                  </path>
                </svg>
                <span class="md:sr-only">Code Editor</span>
              </div>
            </div>
            <!-- # Features -->
            <div class="px-6 flex flex-col justify-end md:order-6">
              <div class="font-bold mb-2 mt-5 md:sr-only">Features</div>
            </div>
            <!-- Bandwidth -->
            <div class="px-6 flex flex-col justify-end md:order-7">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                100GB <span class="md:sr-only">Bandwidth</span>
              </div>
            </div>
            <!-- Visitors -->
            <div class="px-6 flex flex-col justify-end md:order-8">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                100,000 <span class="md:sr-only">Visitors</span>
              </div>
            </div>
            <!-- Max Upload Size -->
            <div class="px-6 flex flex-col justify-end md:order-9">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                Custom <span class="md:sr-only">Max Upload Size</span>
              </div>
            </div>
            <!-- SSL Certificate -->
            <div class="px-6 flex flex-col justify-end md:order-10">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z">
                  </path>
                </svg>
                <span class="md:sr-only">SSL Certificate</span>
              </div>
            </div>
            <!-- # Creation -->
            <div class="px-6 flex flex-col justify-end md:order-11">
              <div class="font-bold mb-2 mt-5 md:sr-only">Creation</div>
            </div>
            <!-- Created Words -->
            <div class="px-6 flex flex-col justify-end md:order-12">
              <div class="h-full text-sm border-b border-gray-200 py-4">
                Unlimited <span class="md:sr-only">Created Words</span>
              </div>
            </div>
            <!-- Team Projects -->
            <div class="px-6 flex flex-col justify-end md:order-[13]">
              <div class="flex items-center h-full text-sm border-b border-gray-200 py-4">
                <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                  <path
                    d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z">
                  </path>
                </svg>
                <span class="md:sr-only">Team Projects</span>
              </div>
            </div>
          </section>
          <!-- End: Enterprise table -->

        </div>

      </div>
    </div>
  </section>
</template>