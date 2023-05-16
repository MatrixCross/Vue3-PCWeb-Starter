<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="settingStore.animationType" mode="out-in" appear>
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
const routeStore = useRouteStore()
const settingStore = useSettingStore()
const keepAliveComponents = computed(() => routeStore.keepAliveComponents)
</script>

<style scoped></style>
