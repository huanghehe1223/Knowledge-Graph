<script setup>
import { onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import AOS from 'aos'

let scrollListener = null

const scrollSpy = () => {
  const targets = document.querySelectorAll('[data-scrollspy-target]')
  const links = document.querySelectorAll('[data-scrollspy-link]')
  if (links.length < 1) return
  const addActive = (i) => {
    const link = links[i] ? links[i] : links[0]
    link.classList.add('scrollspy-active')
  }
  const removeActive = (i) => {
    links[i].classList.remove('scrollspy-active')
  }
  const removeAllActive = () => [...Array(targets.length).keys()].forEach((link) => removeActive(link))
  const targetMargin = 100
  let currentActive = 0
  addActive(0)
  // listen for scroll events
  scrollListener = () => {
    const current = targets.length - [...targets].reverse().findIndex((target) => window.scrollY >= target.offsetTop - targetMargin) - 1
    if (current !== currentActive) {
      removeAllActive()
      currentActive = current
      addActive(current)
    }
  }
  window.addEventListener('scroll', scrollListener)
}

onMounted(() => {
  AOS.init({
    once: true,
    disable: 'phone',
    duration: 700,
    easing: 'ease-out-cubic',
  })
  if (document.readyState === 'complete') {
    scrollSpy()
  } else {
    window.addEventListener('load', scrollSpy)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollListener)
})

const route = useRoute()
watch(() => route.path, async () => {
  await nextTick()
  scrollSpy()
})
</script>

<template>
  <router-view />
</template>