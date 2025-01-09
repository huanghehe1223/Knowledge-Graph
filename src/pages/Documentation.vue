<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from './../partials/Header.vue'
import SidebarLinkGroup from './../partials/SidebarLinkGroup.vue'
import Footer from './../partials/Footer.vue'

const sidebarNavOpen = ref(false)
const sidebarNav = ref(null)
const hamburger = ref(null)

// close on click outside
const clickHandler = ({ target }) => {
  if (!sidebarNavOpen.value || sidebarNav.value.contains(target) || hamburger.value.contains(target)) return
  sidebarNavOpen.value = false
}

// close if the esc key is pressed
const keyHandler = ({ keyCode }) => {
  if (!sidebarNavOpen.value || keyCode !== 27) return
  sidebarNavOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', clickHandler)
  document.addEventListener('keydown', keyHandler)
})

onUnmounted(() => {
  document.removeEventListener('click', clickHandler)
  document.removeEventListener('keydown', keyHandler)
})
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <section class="relative">

        <!-- Stripes illustration -->
        <div class="absolute left-1/2 transform -translate-x-1/2 top-0 pointer-events-none -z-10" aria-hidden="true">
          <img class="max-w-none" src="../images/stripes.svg" width="768" height="432" alt="Stripes" />
        </div>

        <!-- Circles -->
        <div class="absolute left-1/2 -translate-x-1/2 -top-32 ml-[580px] pointer-events-none" aria-hidden="true">
          <div class="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-50 blur-[160px]"></div>
        </div>
        <div class="absolute left-1/2 -translate-x-1/2 top-[420px] ml-[380px] pointer-events-none" aria-hidden="true">
          <div class="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-50 blur-[160px]">
          </div>
        </div>

        <div class="max-w-6xl mx-auto px-4 sm:px-6">

          <!-- Main content -->
          <div class="flex justify-between pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Backdrop -->
            <Transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="transition ease-out duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <div v-show="sidebarNavOpen" class="md:hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-20 transition-opacity" aria-hidden="true"></div>
            </Transition>             

            <!-- Sidebar -->
            <Transition
              enter-active-class="transition ease-out duration-200 transform"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-out duration-200"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <aside
                id="sidebar"
                ref="sidebarNav"
                v-show="sidebarNavOpen"
                class="max-md:fixed max-md:left-0 max-md:inset-y-0 max-md:z-50 w-[268px] max-md:h-screen max-md:bg-gray-50 md:border-r [border-image:linear-gradient(to_bottom,theme(colors.slate.200),theme(colors.slate.300),transparent)1] md:shrink-0 md:!opacity-100 md:!block"
              >

                <div
                  class="sticky top-24 max-md:fixed max-md:inset-y-0 max-md:w-[268px] overflow-y-auto no-scrollbar px-8 py-4 md:py-2">
                  <!-- Docs nav -->
                  <nav class="md:block space-y-8">
                    <!-- Documentation -->
                    <div>
                      <div class="font-bold mb-3">Documentation</div>
                      <ul class="text-sm space-y-2">
                        <li>
                          <a class="relative flex items-center text-gray-700 hover:text-gray-900"
                            href="#0">Getting started</a>
                        </li>
                        <SidebarLinkGroup v-slot="parentLink" :activeCondition="true">
                          <a
                            class="relative flex items-center text-gray-700 hover:text-gray-900"
                            href="#0"
                            @click.prevent="parentLink.handleClick()"
                          >
                            <svg class="absolute -left-5 fill-gray-400 shrink-0" :class="{ '-rotate-90': !parentLink.expanded }"
                              width="11" height="7" xmlns="http://www.w3.org/2000/svg">
                              <path d="m2 .94 3.5 3.5L9 .94 10.06 2 5.5 6.56.94 2 2 .94Z" />
                            </svg>
                            <span>Premium Blocks</span>
                          </a>
                          <!-- 2nd level -->
                          <ul class="pl-4 space-y-2 mt-2" :class="{ 'hidden': !parentLink.expanded }">
                            <li>
                              <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                              <a data-scrollspy-link class="text-gray-500 hover:text-gray-900"
                                href="#intro">Introduction</a>
                            </li>
                            <li>
                              <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                              <a data-scrollspy-link class="text-gray-500 hover:text-gray-900" href="#interface">Crafting
                                your interface</a>
                            </li>
                            <li>
                              <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                              <a data-scrollspy-link class="text-gray-500 hover:text-gray-900" href="#principles">Design
                                principles</a>
                            </li>
                            <li>
                              <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                              <a data-scrollspy-link class="text-gray-500 hover:text-gray-900" href="#guidelines">Design
                                guidelines</a>
                            </li>
                          </ul>
                        </SidebarLinkGroup>
                        <SidebarLinkGroup v-slot="parentLink" :activeCondition="false">
                          <a
                            class="relative flex items-center text-gray-700 hover:text-gray-900"
                            href="#0"
                            @click.prevent="parentLink.handleClick()"
                          >
                            <svg class="absolute -left-5 fill-gray-400 shrink-0" :class="{ '-rotate-90': !parentLink.expanded }"
                              width="11" height="7" xmlns="http://www.w3.org/2000/svg">
                              <path d="m2 .94 3.5 3.5L9 .94 10.06 2 5.5 6.56.94 2 2 .94Z" />
                            </svg>
                            <span>Progress with links</span>
                          </a>
                          <!-- 2nd level -->
                          <ul class="pl-4 space-y-2 mt-2" :class="{ 'hidden': !parentLink.expanded }">
                            <li>
                              <a class="text-gray-500 hover:text-gray-900" href="#0">Setting up your account</a>
                            </li>
                            <li>
                              <a class="text-gray-500 hover:text-gray-900" href="#0">Creating your first campaign</a>
                            </li>
                          </ul>
                        </SidebarLinkGroup>
                        <SidebarLinkGroup v-slot="parentLink" :activeCondition="false">
                          <a
                            class="relative flex items-center text-gray-700 hover:text-gray-900"
                            href="#0"
                            @click.prevent="parentLink.handleClick()"
                          >
                            <svg class="absolute -left-5 fill-gray-400 shrink-0" :class="{ '-rotate-90': !parentLink.expanded }"
                              width="11" height="7" xmlns="http://www.w3.org/2000/svg">
                              <path d="m2 .94 3.5 3.5L9 .94 10.06 2 5.5 6.56.94 2 2 .94Z" />
                            </svg>
                            <span>Discarding changes</span>
                          </a>
                          <!-- 2nd level -->
                          <ul class="pl-4 space-y-2 mt-2" :class="{ 'hidden': !parentLink.expanded }">
                            <li>
                              <a class="text-gray-500 hover:text-gray-900" href="#0">Undoing changes</a>
                            </li>
                            <li>
                              <a class="text-gray-500 hover:text-gray-900" href="#0">Reverting to a previous version</a>
                            </li>
                          </ul>
                        </SidebarLinkGroup>
                        <li>
                          <a class="relative flex items-center text-gray-700 hover:text-gray-900" href="#0">Aspect
                            ratio</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>

              </aside>
            </Transition>

            <!-- Page container -->
            <div class="grow w-full">
              <div class="md:pl-6 lg:pl-12">
                <div class="max-w-[740px] ml-auto">

                  <article class="pb-10 border-b border-gray-200">

                    <!-- Main area -->
                    <div class="min-w-0">

                      <!-- Mobile hamburger + breadcrumbs -->
                      <div class="md:hidden flex items-center mb-8">
                        <!-- Hamburger button -->
                        <button
                          ref="hamburger"
                          class="group inline-flex w-8 h-8 bg-white hover:bg-gray-50 shadow rounded-lg text-center items-center justify-center transition"
                          aria-controls="sidebar"
                          :aria-expanded="sidebarNavOpen"
                          @click="sidebarNavOpen = !sidebarNavOpen"                          
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
                        <!-- Breadcrumbs -->
                        <div class="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
                          <span class="text-gray-600">Documentation</span>
                          <svg class="fill-gray-400 shrink-0 !mx-2 -rotate-90" width="11" height="7"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="m2 .94 3.5 3.5L9 .94 10.06 2 5.5 6.56.94 2 2 .94Z" />
                          </svg>
                          <span class="font-medium truncate">Fundamentals</span>
                        </div>
                      </div>

                      <!-- Article content -->
                      <div>
                        <header class="mb-10">
                          <h1 class="text-3xl font-bold mb-3">Basics & Fundamentals</h1>
                          <p class="text-lg text-gray-700">In this guide, we will explore the essential principles and
                            practical tips to ensure that your Simple extensions engage users and integrate seamlessly
                            with our ecosystem.</p>
                        </header>
                        <div
                          class="prose text-gray-700 max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:font-mono prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700 prose-headings:scroll-mt-24">
                          <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                          <h2 data-scrollspy-target id="intro">Introduction</h2>
                          <p>
                            To create extensions that improve functionality and bring joy to users, it's important to
                            focus on user-centered design, thoughtful layout strategies, and effective use of color and
                            typography. Let's explore how you can seamlessly integrate your extensions with the Simple
                            experience. If you plan to publish your App on the Marketplace, please review our <a
                              href="#0">Marketplace App Guidelines</a> for the Design and Usability section.
                          </p>
                          <figure>
                            <img src="../images/docs-illustration.png" width="740" height="424" alt="Dos illustration">
                          </figure>
                          <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                          <h2 data-scrollspy-target id="interface">Crafting your interface</h2>
                          <p>
                            Designer Extensions operate within an iframe, allowing you to use standard HTML, CSS, and
                            JavaScript for developing your user interface, just like you would for a single-page
                            application. To simplify the process, you may employ frameworks and libraries. For example,
                            React or Vue can be used to create UI components, while Tailwind CSS or Bootstrap can be
                            used for styling.
                          </p>
                          <p>
                            Although Simple does not demand Designer Extensions to be native to the Designer, we believe
                            that <strong>applications that feel native will be more appealing to our customers</strong>
                            and provide a superior user experience.
                          </p>
                          <div
                            class="relative p-5 rounded-2xl bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[mask-composite:exclude_!important] before:pointer-events-none">
                            <div class="flex items-center mb-2">
                              <svg class="fill-blue-500 shrink-0 mr-3" width="16" height="16" viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8Zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1Zm1-3H7V4h2v5Z" />
                              </svg>
                              <div class="font-medium">Looking to build a native looking app?</div>
                            </div>
                            <div class="text-sm">
                              We've provided a simplified version of our design system with colors, typography,
                              components, patterns, and examples to help kickstart the design of your app. Interested?
                              Access the Figma UI kit here.
                            </div>
                          </div>
                          <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                          <h2 data-scrollspy-target id="principles">Design principles</h2>
                          <p>
                            Your UI should adhere to the following key principles:
                          </p>
                          <ul>
                            <li><strong>Customer-focused</strong>: The app's purpose and value should be defined around
                              the needs of the users. It should solve a unique problem for them.</li>
                            <li><strong>Simplicity</strong>: Your app should be simple to use and not require extensive
                              learning to get started. It should complement the visual abstraction of code, not
                              complicate it.</li>
                            <li><strong>Design</strong>: Use consistent design elements like color, typography, and
                              button styles throughout your App. This improves the user experience and makes your app
                              easier to navigate.</li>
                            <li><strong>Foster creative momentum</strong>: Your app should not hinder the creative
                              process. Avoid unnecessary steps or options that could break the user's flow state.</li>
                            <li><strong>Clear language</strong>: Use clear and concise copy. It should guide users and
                              connect the dots between visuals, layouts, and usability.</li>
                            <li><strong>Accessible</strong>: Strive to make your app accessible to all users. This means
                              ensuring it adheres to accessibility standards and best practices.</li>
                          </ul>
                          <!-- The data-scrollspy-target attribute makes the scrollspy work -->
                          <h2 data-scrollspy-target id="guidelines">Design guidelines</h2>
                          <p>
                            Choose a color scheme that aligns with the purpose and tone of your App. Simple primarily
                            uses the Inter for its interface. You should consider adopting it for consistency.
                          </p>
                          <h3>Example Error</h3>
                          <p>
                            If you are seeing these errors, you should ensure your application is built to limit the
                            rate of requests it is performing. It could, for example, be triggered by polling
                            aggressively when waiting for resources to be created or making a large number of highly
                            concurrent API calls.
                          </p>
                          <pre
                            class="overflow-x-auto text-sm text-gray-500 bg-gray-900 p-5 rounded-2xl shadow-lg shadow-black/[0.03] not-prose">
<code class="font-mono">{
<span class="text-blue-500">"message"</span>: "<span class="text-purple-500">Too Many Requests</span>",
<span class="text-blue-500">"code"</span>: "<span class="text-purple-500">too_many_requests</span>",
<span class="text-blue-500">"externalReference"</span>: <span class="text-red-500">null</span>,
<span class="text-blue-500">"details"</span>: [],            
}</code></pre>
                          <h3>Accessing the APIs</h3>
                          <p>
                            Our APIs interact with the canvas via user-friendly objects and methods. With these APIs
                            you're able to interact with existing elements, or add new elements to the canvas.
                          </p>
                          <h3>Conclusion</h3>
                          <p>
                            Let's walk through the key files needed to bring structure, style, and dynamic content to
                            your apps. You can always learn more about an App's configuration, structure, and necessary
                            files in our docs. As you explore and modify the scaffold, don't be afraid to experiment and
                            make changes.
                          </p>
                          <p>
                            The best way to learn is by doing, and the scaffold is a safe environment to try things out.
                          </p>
                        </div>
                      </div>

                      <div class="flex items-center text-sm text-gray-500 mt-6">
                        <svg class="fill-gray-400 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                          fill="none">
                          <path
                            d="M10.008.75a.75.75 0 0 1 1.502 0v2.999a.75.75 0 0 1-.75.75H7.756a.75.75 0 1 1 0-1.5h1.607a4.476 4.476 0 0 0-3.359-1.5 4.486 4.486 0 0 0-4.5 4.328.75.75 0 0 1-.749.722H.727a.75.75 0 0 1-.722-.778 5.981 5.981 0 0 1 6-5.771c1.519 0 2.925.564 4.003 1.534V.75Zm.497 5.422a.736.736 0 0 1 .778-.721.75.75 0 0 1 .721.778 5.98 5.98 0 0 1-6 5.77 5.962 5.962 0 0 1-4.003-1.533v.784a.75.75 0 0 1-1.501 0v-3a.75.75 0 0 1 .75-.75h3.003a.75.75 0 1 1 0 1.5H2.646c.84.944 2.046 1.5 3.358 1.5a4.486 4.486 0 0 0 4.501-4.328Z" />
                        </svg>
                        Updated 14 days ago
                      </div>

                    </div>

                  </article>

                  <!-- Page navigation -->
                  <div
                    class="sm:flex items-center justify-between py-6 space-y-6 sm:space-y-0 sm:space-x-4 text-center">
                    <!-- Prev link -->
                    <div class="sm:w-1/2 sm:flex flex-col items-start">
                      <a class="font-medium group" href="#0">
                        <span class="tracking-normal text-gray-400">&lt;-</span> <span
                          class="text-gray-700 group-hover:text-gray-900 transition">Introduction</span>
                      </a>
                    </div>
                    <!-- Next link -->
                    <div class="sm:w-1/2 sm:flex flex-col items-end ml-auto">
                      <a class="font-medium group" href="#0">
                        <span class="text-gray-700 group-hover:text-gray-900 transition">Crafting your interface </span>
                        <span class="tracking-normal text-gray-400">-&gt;</span>
                      </a>
                    </div>
                  </div>

                  <!-- Feedback -->
                  <div class="text-center">
                    <div
                      class="inline-flex justify-center items-center mt-6 px-3 py-2 bg-white shadow-lg shadow-black/[0.03] rounded-xl">
                      <div class="text-sm text-gray-700 mr-3">Did this page help you?</div>
                      <div class="flex gap-2">
                        <button class="btn-sm bg-white hover:bg-gray-50 shadow rounded px-2 py-0">
                          <svg class="fill-gray-400 mr-1" xmlns="http://www.w3.org/2000/svg" width="12" height="13">
                            <path
                              d="M6.731 5.5h3.225a1.883 1.883 0 0 1 1.575.75 1.9 1.9 0 0 1 .45 1.575l-.6 3.45A2.009 2.009 0 0 1 9.431 13H3V7l1.784-5.625A.5.5 0 0 1 5.234 1a1.3 1.3 0 0 1 .882.176A1.314 1.314 0 0 1 6.73 2.5v3ZM2 7H.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H2V7Z" />
                          </svg>
                          Yes
                        </button>
                        <button class="btn-sm bg-white hover:bg-gray-50 shadow rounded px-2 py-0">
                          <svg class="fill-gray-400 rotate-180 mr-1" xmlns="http://www.w3.org/2000/svg" width="12"
                            height="13">
                            <path
                              d="M6.731 5.5h3.225a1.883 1.883 0 0 1 1.575.75 1.9 1.9 0 0 1 .45 1.575l-.6 3.45A2.009 2.009 0 0 1 9.431 13H3V7l1.784-5.625A.5.5 0 0 1 5.234 1a1.3 1.3 0 0 1 .882.176A1.314 1.314 0 0 1 6.73 2.5v3ZM2 7H.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H2V7Z" />
                          </svg>
                          No
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>

      </section>

    </main>

    <!-- Site footer -->
    <Footer :border="true" />

  </div>
</template>