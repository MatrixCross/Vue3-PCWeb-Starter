<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="animationType" mode="out-in" appear>
      <keep-alive :include="keepAliveComponents">
        <component
          v-if="routeStore.reloadFlag"
          :is="Component"
          :key="route.fullPath"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
import { useRouteStore } from '@/store/modules/route'
import { useSettingStore } from '@/store/modules/setting'
const routeStore = useRouteStore()
const { animationType } = useSettingStore()
const keepAliveComponents = computed(() => routeStore.keepAliveComponents)
</script>

<style lang="less" scoped></style>
