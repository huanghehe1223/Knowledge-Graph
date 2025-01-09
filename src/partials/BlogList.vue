<script setup>
import PageIllustration from "./PageIllustration.vue"
</script>

<template>
  <section class="relative">

    <PageIllustration />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Main content -->
      <div class="max-w-3xl mx-auto pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Section header -->
        <div class="pb-16">
          <h1 class="text-5xl font-bold mb-4">The Simple blog</h1>
          <p class="text-lg text-gray-700">Content for developers, product, and digital experts.</p>
        </div>

        <!-- Categories -->
        <div class="flex flex-wrap gap-2 mb-10">
          <button class="btn-sm font-normal text-gray-200 bg-gray-800 hover:bg-gray-900 shadow">All</button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">Interviews</button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">Inspiration</button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">Updates</button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">Product</button>
          <button class="btn-sm font-normal text-gray-800 bg-white hover:bg-gray-50 shadow">Miscellaneous</button>
        </div>

        <!-- Articles -->
        <div
          class="space-y-10 border-l [border-image:linear-gradient(to_bottom,theme(colors.slate.200),theme(colors.slate.300),transparent)1]">
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-01.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">Alexandra Moore</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">Simple's system for tracking and validating web
                  forms</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking
              system, and describe how teams at Simple interact with the data quality metrics that underlie our design
              builder network.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog-post">Read more <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-02.jpg" width="24" height="24" alt="Author 02" />
                <div class="text-sm text-gray-500">Mark Cruppet</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">Introducing AI SDK 3.0 with UI support</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking
              system, and describe how teams at Simple interact with the data quality metrics that underlie our design
              builder network.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog-post">Read more <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-01.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">Alexandra Moore</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">8 ways to improve feature adoption (includes
                  strategies)</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking
              system, and describe how teams at Simple interact with the data quality metrics that underlie our design
              builder network.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog-post">Read more <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-02.jpg" width="24" height="24" alt="Author 02" />
                <div class="text-sm text-gray-500">Mark Cruppet</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">How to migrate to serverless hosting</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking
              system, and describe how teams at Simple interact with the data quality metrics that underlie our design
              builder network.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog-post">Read more <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-01.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">Alexandra Moore</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">Creating a robust platform for documentation with
                  Simple</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking
              system, and describe how teams at Simple interact with the data quality metrics that underlie our design
              builder network.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog-post">Read more <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-02.jpg" width="24" height="24" alt="Author 02" />
                <div class="text-sm text-gray-500">Mark Cruppet</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">How Simple helps xWeb manage over 4K sites</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking
              system, and describe how teams at Simple interact with the data quality metrics that underlie our design
              builder network.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog-post">Read more <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-01.jpg" width="24" height="24" alt="Author 01" />
                <div class="text-sm text-gray-500">Alexandra Moore</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">Optimizing performance for over 6M monthly visitors</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking
              system, and describe how teams at Simple interact with the data quality metrics that underlie our design
              builder network.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog-post">Read more <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
          <article class="pl-6 sm:pl-10">
            <header class="mb-2">
              <div
                class="relative flex items-center gap-2 mb-2 before:absolute before:-left-6 sm:before:-left-10 before:-ml-px before:inset-y-0 before:w-px before:bg-blue-500">
                <img class="rounded-full" src="../images/blog-author-02.jpg" width="24" height="24" alt="Author 02" />
                <div class="text-sm text-gray-500">Mark Cruppet</div>
              </div>
              <h2 class="text-2xl font-bold">
                <router-link class="hover:underline" to="/blog-post">Revolutionizing video editing on the web with
                  Simple</router-link>
              </h2>
            </header>
            <p class="text-gray-700 mb-4">
              In this blog post, we'll share technical details on how we built this state-of-the-art web form tracking
              system, and describe how teams at Simple interact with the data quality metrics that underlie our design
              builder network.
            </p>
            <footer>
              <router-link class="text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                to="/blog-post">Read more <span class="tracking-normal text-blue-300">-&gt;</span></router-link>
            </footer>
          </article>
        </div>

        <!-- Load more -->
        <div class="text-center mt-12">
          <button class="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-900 shadow py-1.5 min-w-[220px]">Load more <span
              class="tracking-normal text-gray-500 ml-2">↓</span></button>
        </div>

      </div>

    </div>
  </section>
</template>