<script setup>
import Accordion from '../partials/Accordion.vue'

const faqs = [
  {
    question: 'How is Simple different from Complex?',
    answer: 'Simple is designed to be user-friendly and intuitive, while Complex is more robust and feature-rich. Both tools are great for creating websites, but Simple is ideal for beginners and small businesses, while Complex is better suited for larger organizations and developers.'
  },
  {
    question: 'Can I cancel my plan at any time?',
    answer: 'Yes, but you\'ll still pay the remainder of the term for the plan you signed up for.',
    active: true
  },
  {
    question: 'Can I cancel my workspace plan at any time?',
    answer: 'Yes, but you\'ll still pay the remainder of the term for the plan you signed up for.'
  },
  {
    question: 'What kind of support does Simple provide?',
    answer: 'Support is available 24/7 via email, chat, and phone. We\'re here to help you with any questions or concerns you may have.'
  },
  {
    question: 'Can my clients or coworkers upload their own content?',
    answer: 'Yes! You can invite clients or coworkers to collaborate on your projects, and they can upload their own content.'
  },
  {
    question: 'How much traffic can Simple hosting handle?',
    answer: 'Our hosting plans are designed to handle high traffic volumes, so you can rest assured that your site will perform well under pressure.'
  },
  {
    question: 'Are Simple websites SEO-friendly?',
    answer: 'Yes! Simple websites are designed with SEO in mind, so you can easily optimize your site for search engines.'
  }
]
</script>

<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="text-3xl md:text-4xl font-bold">Questions we often get</h2>
        </div>
        <div class="max-w-3xl mx-auto">
          <div class="space-y-2">
            <template v-for="(faq, index) in faqs">
              <Accordion :title="faq.question" :id="`faqs-${index}`" :active="faq.active">
                {{ faq.answer }}
              </Accordion>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>