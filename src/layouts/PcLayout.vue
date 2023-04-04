<template>
  <naive-provider>
    <n-layout class="flex h-100vh" has-sider>
      <n-layout-sider
        bordered
        :collapsed="collapsed"
        :collapsed-width="64"
        :width="200"
        :inverted="inverted"
        collapse-mode="width"
        class="min-h-100vh shadow relative z-13"
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
          class="flex flex-1 mt-60px relative"
          content-style="width: 100%;display: flex;flex-direction: column;"
          :class="{ 'bg-hex-f5f7f9': inverted === false }"
        >
          <div class="flex-1 p-16px">
            <content-view />
          </div>
          <n-layout-footer
            class="flex items-center justify-center min-h-40px"
            :class="{ 'bg-white': inverted === false }"
          >
            <div class="footer">Copyright ©2023 Vue3 Starter</div>
          </n-layout-footer>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </naive-provider>
</template>

<script lang="ts" setup>
import { useSettingStore } from '@/store/modules/setting'
import MenuView from './components/LayoutMenu.vue'
import HeaderView from './components/LayoutHeader.vue'
import ContentView from './components/LayoutContent.vue'
import LogoView from './components/LayoutLogo.vue'

const settingStore = useSettingStore()

const collapsed = ref(false)
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

<style scoped></style>
