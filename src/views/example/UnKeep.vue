<template>
  <n-card>
    <n-h2>该页面不被缓存，切换页面会导致状态丢失</n-h2>
    <n-h1>当前值：{{ count }}</n-h1>
    <n-button @click="count++">+1</n-button>
  </n-card>
</template>
<script lang="ts" setup>
let count = ref(0)
</script>
