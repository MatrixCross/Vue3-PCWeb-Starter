<template>
  <n-card
    hoverable
    class="min-h-full home-page rounded-16px"
    content-style="display: flex; flex-direction: column; justify-content:center; align-item: center;"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="flex">
        <img src="/vite.svg" class="logo transition w-200px h-200px" />
        <img
          src="@/assets/svg/vue.svg"
          class="logo vue transition w-200px h-200px ml-50px"
        />
      </div>
      <n-gradient-text type="success" :size="64">
        Vue3 Starter
      </n-gradient-text>
      <n-h1 prefix="bar" type="success">
        <n-gradient-text type="danger">
          一个开箱即用的Vue3项目模板
        </n-gradient-text>
      </n-h1>
      <div class="mt-4 btns">
        <n-button size="large" type="primary" class="mr-8" @click="handlerBtn">
          关于项目
        </n-button>
        <n-button size="large" @click="onOpenMyGithub" class="mr-8">
          <template #icon><Icon icon="tabler:3d-cube-sphere" /></template>
          作者Github
        </n-button>
      </div>
    </div>
  </n-card>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue'
const handlerBtn = () => {
  window.$loading.error()
  window.$notification.error({
    title: '功能未完善',
    content: '请耐心等待功能实现',
    duration: 3000,
  })
}
const onOpenMyGithub = () => {
  window.open('https://github.com/Wyatex')
}
</script>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
