<script setup>
import Header from './../partials/Header.vue'
import HeroCustomers from './../partials/HeroCustomers.vue'
import WallOfLove from './../partials/WallOfLove.vue'
import CtaAlternative from './../partials/CtaAlternative.vue'
import Footer from './../partials/Footer.vue'
import { ref } from 'vue'

// 将flag状态提升到父组件
const flag = ref(false)

// 处理flag变化的方法
const handleFlagChange = (newValue) => {
  flag.value = newValue
}
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->


      <HeroCustomers 
        :flag="flag"
        @update:flag="handleFlagChange"
      />

      <WallOfLove 
        :flag="flag"
      />
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