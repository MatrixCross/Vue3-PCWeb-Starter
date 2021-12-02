<template>
  <div class="h-full p-4 home-page">
    <n-card hoverable>
      <div class="flex flex-col items-center justify-center">
        <div class="logo">
          <img src="@/assets/logo.png" alt="" />
        </div>
        <div class="flex flex-col items-center justify-center slogen">
          <n-gradient-text type="success" :size="64">
            Vue3 Starter
          </n-gradient-text>
          <n-h1 prefix="bar" type="success">
            <n-gradient-text type="danger">
              一个开箱即用的Vue3项目模板
            </n-gradient-text>
          </n-h1>
        </div>
        <div class="mt-4 btns">
          <n-button
            size="large"
            type="primary"
            class="mr-8"
            @click="handlerBtn"
          >
            关于项目
          </n-button>
          <n-button size="large" @click="handlerBtn">作者Github</n-button>
        </div>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { NGradientText, NH1, NCard, NButton } from 'naive-ui'

const handlerBtn = () => {
  window['$loading'].error()
  window['$notification'].error({
    title: '功能未完善',
    content: '请耐心等待功能实现',
    duration: 3000,
  })
}
</script>

<style lang="less" scoped>
.home-page {
  min-height: 500px;

  .details {
    max-width: 1000px;
  }
}
</style>
