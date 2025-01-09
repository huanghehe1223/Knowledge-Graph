<script setup>
import { ref } from 'vue'

const props = defineProps({
  activeCondition: Boolean
})

const expanded = ref(props.activeCondition)

const handleClick = () => {
  expanded.value = !expanded.value
}
</script>

<template>
  <li>
    <slot :handleClick="handleClick" :expanded="expanded" />
  </li>
</template>