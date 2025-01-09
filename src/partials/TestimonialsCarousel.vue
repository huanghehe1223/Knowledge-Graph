<script setup>
import Testimonial from '../partials/Testimonial.vue'
import TestimonialImg01 from '../images/testimonial-01.jpg'
import TestimonialImg02 from '../images/testimonial-02.jpg'
import TestimonialImg03 from '../images/testimonial-03.jpg'
import TestimonialImg04 from '../images/testimonial-04.jpg'

const testimonials = [
  {
    img: TestimonialImg01,
    name: 'Peter Lowe',
    username: '@peterlowex',
    date: 'May 19, 2027',
    content: 'As a founder, having a visually appealing and user-friendly website is essential. This tool not only helped me achieve that but also improved my site\'s performance and SEO.',
    channel: 'Twitter'
  },
  {
    img: TestimonialImg02,
    name: 'Rodri Alba',
    username: '@rodri_spn',
    date: 'Apr 12, 2027',
    content: 'Simple has revolutionized the way I manage my work. Its intuitive interface and seamless functionality make staying organized effortless. I can\'t imagine my life without it.',
    channel: 'Twitter'
  },
  {
    img: TestimonialImg03,
    name: 'Michele Lex',
    username: '@MikyBrown',
    date: 'Mar 04, 2027',
    content: 'I\'ve tried several website builders before, but none were as user-friendly and versatile as this one. From design to functionality, it exceeded my expectations!',
    channel: 'Twitter'
  },
  {
    img: TestimonialImg04,
    name: 'Michael Ross',
    username: '@michjack',
    date: 'Jan 15, 2027',
    content: 'Simple lives up to its name in every way. It\'s incredibly easy to use yet powerful enough to handle all my tasks effortlessly. It\'s become an essential part of my daily routine.',
    channel: 'Twitter'
  }
]
</script>

<template>
  <section
    class="relative before:absolute before:inset-0 before:h-[120%] before:pointer-events-none before:bg-gradient-to-b before:from-gray-100 before:-z-10">
    <div class="pt-12 md:pt-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold">Top startups love Simple</h2>
        </div>
      </div>
      <div class="relative flex justify-center max-w-[94rem] mx-auto">
        <div class="absolute bottom-20 -translate-x-36 -z-10" aria-hidden="true">
          <div class="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px]"></div>
        </div>
        <div class="absolute -bottom-10 -z-10" aria-hidden="true">
          <div class="w-80 h-80 rounded-full bg-blue-500 opacity-40 blur-[160px]"></div>
        </div>
        <div class="absolute bottom-0 -z-10" aria-hidden="true">
          <div class="w-56 h-56 rounded-full border-[20px] border-white blur-[20px]"></div>
        </div>
        <!-- Row -->
        <div class="w-full inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] py-12 md:py-20 group">
          <div class="flex items-start justify-center md:justify-start [&>*]:mx-3 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]">
            <!-- Items -->
            <Testimonial v-for="(testimonial, index) in testimonials" :key="index" :testimonial="testimonial" class="w-[22rem] group-hover:rotate-0 transition-transform duration-300">
              {{ testimonial.content }}
            </Testimonial>            
          </div>
          <!-- Duplicated element for infinite scroll -->
          <div class="flex items-start justify-center md:justify-start [&>*]:mx-3 animate-[infinite-scroll_60s_linear_infinite] group-hover:[animation-play-state:paused]" aria-hidden="true">
            <!-- Items -->
            <Testimonial v-for="(testimonial, index) in testimonials" :key="index" :testimonial="testimonial" class="w-[22rem] group-hover:rotate-0 transition-transform duration-300">
              {{ testimonial.content }}
            </Testimonial>            
          </div>          
        </div>
      </div>
    </div>
  </section>
</template>