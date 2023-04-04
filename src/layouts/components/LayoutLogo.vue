<template>
  <div class="logo">
    <transition name="fade" mode="out-in" appear>
      <img v-if="collapsed" src="@/assets/svg/vue.svg" />
      <span v-else class="text-xl font-bold">Vue3 Starter</span>
    </transition>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  collapsed: boolean
}>()
</script>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;
}
img {
  width: auto;
  height: 32px;
}
</style>
