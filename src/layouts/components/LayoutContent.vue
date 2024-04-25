<script lang="ts" setup>
const routeStore = useRouteStore()
const settingStore = useSettingStore()
const keepAliveComponents = computed(() => routeStore.keepAliveComponents)
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="settingStore.animationType" mode="out-in" appear>
      <keep-alive :include="keepAliveComponents">
        <component
          :is="Component"
          v-if="routeStore.reloadFlag"
          :key="route.fullPath"
        />
      </keep-alive>
    </transition>
  </router-view>
</template>

<style scoped></style>
