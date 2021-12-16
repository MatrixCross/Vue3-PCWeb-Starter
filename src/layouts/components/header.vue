<template>
  <div class="layout-header">
    <div class="layout-header-left">
      <!-- 菜单收起 -->
      <div
        class="ml-1 layout-header-trigger layout-header-trigger-min"
        @click="() => $emit('update:collapsed', !collapsed)"
      >
        <n-icon v-if="collapsed" size="18">
          <MenuUnfoldOutlined />
        </n-icon>
        <n-icon v-else size="18">
          <MenuFoldOutlined />
        </n-icon>
      </div>
      <!-- 刷新 -->
      <div
        class="mr-1 layout-header-trigger layout-header-trigger-min"
        @click="reloadPage"
      >
        <n-icon size="18">
          <ReloadOutline />
        </n-icon>
      </div>
      <!--切换全屏-->
      <div
        class="mr-1 layout-header-trigger layout-header-trigger-min"
        @click="toggleFullScreen"
      >
        <n-tooltip placement="bottom">
          <template #trigger>
            <n-icon size="18">
              <FullscreenOutlined v-if="!isFullScreen" />
              <FullscreenExitOutlined v-else />
            </n-icon>
          </template>
          <span>全屏</span>
        </n-tooltip>
      </div>
    </div>
    <div class="layout-header-right">
      <!-- 深色开关 -->
      <div
        class="ml-1 layout-header-trigger layout-header-trigger-min"
        @click="darkThemeSwitch"
      >
        <div class="flex items-center h-full">
          <n-tooltip placement="bottom">
            <template #trigger>
              <n-icon size="18">
                <Moon v-if="settingStore.darkTheme" />
                <Sunny v-else />
              </n-icon>
            </template>
            <span> 深浅色切换 </span>
          </n-tooltip>
        </div>
      </div>
      <!-- github -->
      <div
        class="layout-header-trigger layout-header-trigger-min"
        @click="openGithub"
      >
        <n-tooltip placement="bottom">
          <template #trigger>
            <n-icon size="18">
              <GithubOutlined />
            </n-icon>
          </template>
          <span> github </span>
        </n-tooltip>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { NTooltip, NIcon } from 'naive-ui'
import { useSettingStore } from '@/store/modules/setting'
import { useRouter, useRoute } from 'vue-router'
import {
  FullscreenOutlined,
  FullscreenExitOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GithubOutlined,
  ReloadOutline,
  Moon,
  Sunny,
} from '@/components/common/Icons'
import { unref } from 'vue'
defineProps<{
  collapsed: boolean
  inverted: boolean
}>()
defineEmits(['update:collapsed'])
const settingStore = useSettingStore()
const router = useRouter()
const route = useRoute()
const openGithub = () => {
  window.open('https://github.com/Wyatex/Vue3-starter')
}
const darkThemeSwitch = () => {
  settingStore.darkTheme = !settingStore.darkTheme
}
// 刷新页面
const reloadPage = () => {
  router.push({
    path: '/redirect' + unref(route).fullPath,
  })
}

const isFullScreen = ref(false)
// 切换全屏图标
const toggleFullscreenIcon = () =>
  (isFullScreen.value = document.fullscreenElement !== null ? true : false)

// 监听全屏切换事件
document.addEventListener('fullscreenchange', toggleFullscreenIcon)

// 全屏切换
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 64px;
  box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  transition: all 0.2s ease-in-out;
  width: 100%;
  z-index: 11;

  &-left {
    display: flex;
    align-items: center;

    ::v-deep(.ant-breadcrumb span:last-child .link-text) {
      color: #515a6e;
    }

    .n-breadcrumb {
      display: inline-block;
    }

    &-menu {
      color: var(--text-color);
    }
  }

  &-right {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  &-trigger {
    display: inline-block;
    width: 64px;
    height: 64px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    .n-icon {
      display: flex;
      align-items: center;
      height: 64px;
      line-height: 64px;
    }

    .anticon {
      font-size: 16px;
      color: #515a6e;
    }
  }

  &-trigger-min {
    width: auto;
    padding: 0 12px;
  }
}
</style>
