<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
    <n-loading-bar-provider>
      <loading-content />
      <n-dialog-provider>
        <dialog-content />
        <n-notification-provider>
          <notification-content />
          <n-message-provider>
            <message-content />
            <slot></slot>
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import {
  NDialogProvider,
  NNotificationProvider,
  NMessageProvider,
  NLoadingBarProvider,
  NConfigProvider,
  zhCN,
  dateZhCN,
  darkTheme,
} from 'naive-ui'
import MessageContent from './MessageContent.vue'
import DialogContent from './DiologContent.vue'
import LoadingContent from './LoadingContent.vue'
import NotificationContent from './NotificationContent.vue'
import { useSettingStore } from '@/store/modules/setting'
const settingStore = useSettingStore()
let theme = computed(() => (settingStore.darkTheme ? darkTheme : undefined))
</script>
