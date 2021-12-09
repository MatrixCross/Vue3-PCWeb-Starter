<template>
  <div>
    <h1>{{ msg }}</h1>
    <n-skeleton text :repeat="10" /> <n-skeleton text style="width: 60%" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { NSkeleton } from 'naive-ui'
export default defineComponent({
  name: 'AboutAuthor',
  components: {
    NSkeleton,
  },
  props: {
    msg: {
      type: String,
      default: '该页面待完成',
    },
  },
  setup: () => {
    const count = ref(0)
    return { count }
  },
})
</script>

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
