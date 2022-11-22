<template>
  <n-card>
    <n-h2>该页面已被缓存，切换页面不会导致状态丢失</n-h2>
    <n-h1>当前值：{{ count }}</n-h1>
    <n-button @click="count++">+1</n-button>
  </n-card>
</template>
<script lang="ts" setup>
const count = ref(0)
</script>
