<template>
  <div class="logo">
    <transition :name="getTransitionName" mode="out-in" appear>
      <img v-if="collapsed" src="@/assets/logo.png" alt="" />
      <h2 v-else class="title">Vue3 Starter</h2>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useSettingStore } from '@/store/modules/setting'
defineProps<{
  collapsed: boolean
}>()

const settingStore = useSettingStore()
const getTransitionName = computed(() => settingStore.animationType)
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;

  img {
    width: auto;
    height: 32px;
  }

  .title {
    margin: 0;
  }
}
</style>
