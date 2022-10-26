<template>
  <naive-provider>
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
      <n-layout
        :inverted="inverted"
        class="min-h-full"
        content-style="display: flex;flex-direction: column;"
      >
        <n-layout-header :inverted="inverted" position="absolute">
          <header-view v-model:collapsed="collapsed" :inverted="inverted" />
        </n-layout-header>
        <n-layout-content
          class="flex flex-1 layout-content"
          content-style="width: 100%;display: flex;flex-direction: column;"
          :class="{ 'layout-default-background': inverted === false }"
        >
          <div class="flex-1 p-16px">
            <content-view />
          </div>
          <n-layout-footer
            class="flex items-center justify-center"
            :class="{ 'bg-white': inverted === false }"
          >
            <div class="footer">Copyright ©2021 Vue3 Starter</div>
          </n-layout-footer>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </naive-provider>
</template>

<script lang="ts" setup>
import { useSettingStore } from '@/store/modules/setting'
import NaiveProvider from '@/components/common/NaiveProvider/index.vue'
import MenuView from './components/menu.vue'
import HeaderView from './components/header.vue'
import ContentView from './components/content.vue'
import LogoView from './components/logo.vue'
const settingStore = useSettingStore()

const collapsed = ref<boolean>(false)
const inverted = computed(() => settingStore.darkTheme)

const watchWidth = () => {
  const Width = document.body.clientWidth
  if (Width <= 950) {
    collapsed.value = true
  } else collapsed.value = false
}

onMounted(() => {
  window.addEventListener('resize', watchWidth)
  window['$loading'].finish()
})
</script>

<style lang="less" scoped>
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
    flex: 1;
    position: relative;
    margin-top: 60px;

    .header-space-placeholder {
      height: 64px;
    }
  }

  .n-layout-footer {
    min-height: 40px;
  }

  .n-layout-header.n-layout-header--absolute-positioned {
    z-index: 11;
  }
}
</style>
