<script setup>
import Header from './../partials/Header.vue'
import PricingTables from './../partials/PricingTables.vue'
import ComparePlans from './../partials/ComparePlans.vue'
import TestimonialsGrid from './../partials/TestimonialsGrid.vue'
import Faqs from './../partials/Faqs.vue'
import CtaAlternative from './../partials/CtaAlternative.vue'
import Footer from './../partials/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <PricingTables />
      <ComparePlans />
      <TestimonialsGrid />
      <Faqs />
      <CtaAlternative
        class="overflow-hidden"
        heading="Create your next project with Simple"
        buttonText="Start Free Trial"
        buttonLink="#0"
      />       

    </main>

    <!-- Site footer -->
    <Footer :border="true" />

  </div>
</template>
