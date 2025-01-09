<script setup>
import Header from './../partials/Header.vue'
import TextArea from '../partials/TextArea.vue'
import Faqs02 from '../partials/Faqs02.vue'
import CtaAlternative from '../partials/CtaAlternative.vue'
import Footer from './../partials/Footer.vue'
import {ref} from "vue";
// 在父组件中定义REresult
const REresult = ref('')
// 定义更新REresult的函数
const updateREresult = (newValue) => {
  REresult.value = newValue
}


</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <TextArea :REresult="REresult" @update:REresult="updateREresult" />
      <Faqs02 :REresult="REresult" />
      <CtaAlternative
        class="overflow-hidden"
        heading="Cannot find what you're looking for?"
        buttonText="Contact Us"
        buttonLink="#0"
      />

    </main>

    <!-- Site footer -->
    <Footer :border="true" />

  </div>
</template>