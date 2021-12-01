<template>
  <app-provider>
    <n-layout class="layout" has-sider>
      <n-layout-sider
        :collapsed="collapsed"
        :collapsed-width="64"
        :width="200"
        :inverted="inverted"
        collapse-mode="width"
        class="layout-sider"
        show-trigger="bar"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <logo-view :collapsed="collapsed" />
        <menu-view :collapsed="collapsed" :inverted="inverted"></menu-view>
      </n-layout-sider>
      <n-layout :inverted="inverted">
        <n-layout-header :inverted="inverted" position="absolute">
          <header-view v-model:collapsed="collapsed" :inverted="inverted" />
        </n-layout-header>
        <n-layout-content
          class="layout-content"
          :class="{ 'layout-default-background': inverted === false }"
        >
          <content-view />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </app-provider>
</template>

<script lang="ts" setup>
import { NLayout, NLayoutSider, NLayoutContent, NLayoutHeader } from 'naive-ui'
import { ref, computed } from 'vue'
import { useSettingStore } from '@/store/modules/setting'
import AppProvider from './Application/AppProvider.vue'
import MenuView from './components/menu.vue'
import HeaderView from './components/header.vue'
import ContentView from './components/content.vue'
import LogoView from './components/logo.vue'
const settingStore = useSettingStore()

const collapsed = ref<boolean>(false)
const inverted = computed(() => settingStore.darkTheme)
</script>

<style lang="less">
.layout {
  display: flex;
  flex-direction: row;
  flex: auto;
  height: 100vh;

  &-default-background {
    background: #f5f7f9;
  }

  .layout-sider {
    min-height: 100vh;
    box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
    position: relative;
    z-index: 13;
    transition: all 0.2s ease-in-out;
  }

  .layout-content {
    flex: auto;
    min-height: 100vh;
    position: relative;
    padding: 64px 10px 0 10px;
  }

  .n-layout-header.n-layout-header--absolute-positioned {
    z-index: 11;
  }
}
</style>
