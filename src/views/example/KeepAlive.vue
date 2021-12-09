<template>
  <n-card>
    <n-h2>该页面也被缓存，切换页面不会导致状态丢失</n-h2>
    <n-h1>当前值：{{ count }}</n-h1>
    <n-button @click="count++">+1</n-button>
  </n-card>
</template>
<script lang="ts">
import { NH1, NCard, NButton, NH2 } from 'naive-ui'
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'KeepAlive',
  components: {
    NH1,
    NCard,
    NButton,
    NH2,
  },
  setup() {
    let count = ref(0)
    return {
      count,
    }
  },
})
</script>
