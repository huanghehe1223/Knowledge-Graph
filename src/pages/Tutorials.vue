<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <TutorialsList />
      <Newsletter />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import TutorialsList from './../partials/TutorialsList.vue'
import Newsletter from './../partials/Newsletter.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Tutorials',
  components: {
    Header,
    TutorialsList,
    Newsletter,
    Footer,
  },
}
</script>
