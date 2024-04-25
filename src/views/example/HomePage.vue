<script lang="ts" setup>
import { Icon } from '@iconify/vue'

function handlerBtn() {
  window.$loading.error()
  window.$notification.error({
    title: '功能未完善',
    content: '请耐心等待功能实现',
    duration: 3000,
  })
}
function onOpenMyGithub() {
  window.open('https://github.com/Wyatex')
}
</script>

<template>
  <n-card
    hoverable
    class="home-page min-h-full rounded-16px"
    content-style="display: flex; flex-direction: column; justify-content:center; align-item: center;"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="flex">
        <img src="/vite.svg" class="logo h-200px w-200px transition">
        <img
          src="@/assets/svg/vue.svg"
          class="logo vue ml-50px h-200px w-200px transition"
        >
      </div>
      <n-gradient-text type="success" :size="64">
        Vue3 Starter
      </n-gradient-text>
      <n-h1 prefix="bar" type="success">
        <n-gradient-text type="danger">
          一个开箱即用的Vue3项目模板
        </n-gradient-text>
      </n-h1>
      <div class="btns mt-4">
        <n-button size="large" type="primary" class="mr-8" @click="handlerBtn">
          关于项目
        </n-button>
        <n-button size="large" class="mr-8" @click="onOpenMyGithub">
          <template #icon>
            <Icon icon="tabler:3d-cube-sphere" />
          </template>
          作者Github
        </n-button>
      </div>
    </div>
  </n-card>
</template>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
