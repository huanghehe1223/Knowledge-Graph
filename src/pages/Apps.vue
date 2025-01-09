<script setup>
import Header from './../partials/Header.vue'
import HeroApps from '../partials/HeroApps.vue'
import AppList from '../partials/AppList.vue'
import CtaAlternative from '../partials/CtaAlternative.vue'
import Footer from './../partials/Footer.vue'
</script>


<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <HeroApps />
      <AppList />
      <CtaAlternative
        heading="Create your next project with Simple"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />  

    </main>

    <!-- Site footer -->
    <Footer :border="true" />

  </div>
</template>