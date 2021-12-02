<template>
  <div class="layout-header">
    <div class="layout-header-left">
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
      <div class="ml-1 layout-header-trigger layout-header-trigger-min">
        <div class="flex items-center h-full">
          <n-switch @update:value="handle">
            <template #checked>深色</template>
            <template #unchecked>浅色</template>
          </n-switch>
        </div>
      </div>
    </div>
    <div class="layout-header-right">
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
import { NTooltip, NIcon, NSwitch } from 'naive-ui'
import { useSettingStore } from '@/store/modules/setting'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  GithubOutlined,
} from '@vicons/antd'
defineProps<{
  collapsed: boolean
  inverted: boolean
}>()
defineEmits(['update:collapsed'])
const settingStore = useSettingStore()
const openGithub = () => {
  window.open('https://github.com/Wyatex/Vue3-starter')
}
const handle = e => {
  if (e) {
    settingStore.darkTheme = e
  } else {
    settingStore.darkTheme = e
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
