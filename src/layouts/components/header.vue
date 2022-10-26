<template>
  <div class="layout-header">
    <div class="layout-header-left">
      <!-- 菜单收起 -->
      <div
        class="ml-1 layout-header-trigger layout-header-trigger-min"
        @click="() => $emit('update:collapsed', !collapsed)"
      >
        <n-icon v-if="collapsed" size="20">
          <i-tabler:indent-increase />
        </n-icon>
        <n-icon v-else size="20">
          <i-tabler:indent-decrease />
        </n-icon>
      </div>
      <!-- 刷新 -->
      <div
        class="mr-1 layout-header-trigger layout-header-trigger-min"
        @click="reloadPage"
      >
        <n-icon size="20">
          <i-ic:round-refresh :class="{ 'animate-spin': loading }" />
        </n-icon>
      </div>
      <!--切换全屏-->
      <div
        class="mr-1 layout-header-trigger layout-header-trigger-min"
        @click="toggleFullScreen"
      >
        <n-tooltip placement="bottom">
          <template #trigger>
            <n-icon size="20">
              <i-ant-design:fullscreen-outlined v-if="!isFullScreen" />
              <i-ant-design:fullscreen-exit-outlined v-else />
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
              <n-icon size="20">
                <i-mdi:moon-waxing-crescent v-if="settingStore.darkTheme" />
                <i-ic:outline-wb-sunny v-else />
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
            <n-icon size="20">
              <i-tabler:brand-github />
            </n-icon>
          </template>
          <span> github </span>
        </n-tooltip>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useSettingStore } from '@/store/modules/setting'
import { useRouteStore } from '@/store/modules/route'
import useLoading from '@/hooks/common/useLoading'
defineProps<{
  collapsed: boolean
  inverted: boolean
}>()
defineEmits(['update:collapsed'])
const settingStore = useSettingStore()
const routeStore = useRouteStore()
const openGithub = () => {
  window.open('https://github.com/Wyatex/Vue3-starter')
}
const darkThemeSwitch = () => {
  settingStore.darkTheme = !settingStore.darkTheme
}
// 刷新页面
const { loading, startLoading, endLoading } = useLoading()
const reloadPage = () => {
  startLoading()
  routeStore.reloadPage()
  setTimeout(() => {
    endLoading()
  }, 1000)
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
