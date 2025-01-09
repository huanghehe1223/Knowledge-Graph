<script setup>
import Header from './../partials/Header.vue'
import BlogList from './../partials/BlogList.vue'
import Footer from './../partials/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <BlogList />

    </main>

    <!-- Site footer -->
    <Footer :border="true" />

  </div>
</template>