<script lang="ts" setup>
defineProps({
  msg: {
    type: String,
    default: '该页面待完成',
  },
})
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <n-skeleton text :repeat="10" /> <n-skeleton text style="width: 60%" />
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
