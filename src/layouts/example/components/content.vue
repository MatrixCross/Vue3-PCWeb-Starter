<template>
  <router-view>
    <template #default="{ Component, route }">
      <transition :name="getTransitionName" mode="out-in" appear>
        <!-- component外面必须要有一层根节点动画才能生效 -->
        <div :key="route.name">
          <component :is="Component" />
        </div>
      </transition>
    </template>
  </router-view>
</template>

<script setup>
import { useSettingStore } from '@/store/modules/setting'
const { getTransitionName } = useSettingStore()
</script>

<style lang="less" scoped></style>
