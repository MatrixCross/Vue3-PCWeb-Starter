<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <slot></slot>
            <naive-provider-content />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  NConfigProvider,
  NLoadingBarProvider,
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
  zhCN,
  dateZhCN,
  darkTheme,
} from 'naive-ui'
import NaiveProviderContent from './NaiveProviderContent.vue'

import { useSettingStore } from '@/store/modules/setting'
const settingStore = useSettingStore()
let theme = computed(() => (settingStore.darkTheme ? darkTheme : undefined))
</script>
<style scoped></style>
