<script setup>
import PageIllustration from "./PageIllustration.vue"
</script>

<template>
  <section class="relative">

    <PageIllustration />

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Hero content -->
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Section header -->
        <div class="text-center pb-12 md:pb-16">
          <div
            class="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
            data-aos="zoom-y-out">
            <div class="flex justify-center -space-x-3 -mx-0.5">
              <img class="rounded-full border-2 border-gray-50 box-content" src="../images/avatar-01.jpg" width="32"
                height="32" alt="Avatar 01" />
              <img class="rounded-full border-2 border-gray-50 box-content" src="../images/avatar-02.jpg" width="32"
                height="32" alt="Avatar 02" />
              <img class="rounded-full border-2 border-gray-50 box-content" src="../images/avatar-03.jpg" width="32"
                height="32" alt="Avatar 03" />
              <img class="rounded-full border-2 border-gray-50 box-content" src="../images/avatar-04.jpg" width="32"
                height="32" alt="Avatar 04" />
              <img class="rounded-full border-2 border-gray-50 box-content" src="../images/avatar-05.jpg" width="32"
                height="32" alt="Avatar 05" />
              <img class="rounded-full border-2 border-gray-50 box-content" src="../images/avatar-06.jpg" width="32"
                height="32" alt="Avatar 06" />
            </div>
          </div>
          <h1
            class="text-5xl md:text-6xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
            data-aos="zoom-y-out" data-aos-delay="150">The website builder you're <br class="max-lg:hidden" />looking
            for</h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-lg text-gray-700 mb-8" data-aos="zoom-y-out" data-aos-delay="300">Simple is a modern website
              builder powered by AI that changes how companies create user interfaces together.</p>
            <div
              class="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out"
                data-aos-delay="450">
                <a class="btn text-white bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] hover:bg-[length:100%_150%] bg-[bottom] shadow w-full mb-4 sm:w-auto sm:mb-0 group"
                  href="#0">
                  <span class="relative inline-flex items-center">
                    Start Free Trial <span
                      class="tracking-normal text-blue-300 group-hover:translate-x-0.5 transition-transform ml-1">-&gt;</span>
                  </span>
                </a>
                <a class="btn text-gray-800 bg-white hover:bg-gray-50 shadow w-full sm:w-auto sm:ml-4" href="#0">Learn
                  More</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Hero image -->
        <div class="max-w-3xl mx-auto" data-aos="zoom-y-out" data-aos-delay="600">
          <div
            class="relative aspect-video bg-gray-900 rounded-2xl px-5 py-3 shadow-xl before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] before:pointer-events-none after:absolute after:-inset-5 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1] after:-z-10">
            <div
              class="relative flex items-center justify-between before:block before:w-[41px] before:h-[9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] before:bg-[length:16px_9px] after:w-[41px] mb-8">
              <span class="text-white font-medium text-[13px]">cruip.com</span>
            </div>
            <div class="text-gray-500 font-mono [&_span]:opacity-0">
              <span class="text-gray-200 animate-[code-1_10s_infinite]">npm login</span> <span
                class="animate-[code-2_10s_infinite]">--registry=https://npm.pkg.github.com</span><br />
              <span class="animate-[code-3_10s_infinite]">--scope=@phanatic</span> <span
                class="animate-[code-4_10s_infinite]">Successfully logged-in.</span><br /><br />
              <span class="text-gray-200 animate-[code-5_10s_infinite]">npm publish</span><br />
              <span class="animate-[code-6_10s_infinite]">Package published.</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
