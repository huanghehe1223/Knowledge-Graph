<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <AboutIntro />
      <AboutStory />
      <Stats />
      <Team />
      <Career />
      <Process />
      <CtaAlternative />      

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import AboutIntro from './../partials/AboutIntro.vue'
import AboutStory from './../partials/AboutStory.vue'
import Stats from './../partials/Stats.vue'
import Team from './../partials/Team.vue'
import Career from './../partials/Career.vue'
import Process from './../partials/Process.vue'
import CtaAlternative from './../partials/CtaAlternative.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    AboutIntro,
    AboutStory,
    Stats,
    Team,
    Career,
    Process,
    CtaAlternative,
    Footer,
  },
}
</script>
