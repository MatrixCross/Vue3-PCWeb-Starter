<template>
  <svg aria-hidden="true">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts" name="SvgIcon">
import { computed } from 'vue'
const symbolId = computed(() => `#${props.prefix}-${props.name}`)

// props定义
interface iProps {
  name: string
  prefix?: string
  color?: string
}
const props = withDefaults(defineProps<iProps>(), {
  prefix: 'icon',
})
</script>
