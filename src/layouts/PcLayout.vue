<script lang="ts" setup>
import LayoutMenu from './components/LayoutMenu.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutContent from './components/LayoutContent.vue'
import LayoutLogo from './components/LayoutLogo.vue'
import LayoutFooter from './components/LayoutFooter.vue'

const settingStore = useSettingStore()
const collapsed = ref(false)
const inverted = computed(() => settingStore.darkTheme)

function watchWidth() {
  const Width = document.body.clientWidth
  if (Width <= 950)
    collapsed.value = true
  else collapsed.value = false
}

onMounted(() => {
  window.addEventListener('resize', watchWidth)
  window.$loading.finish()
})
</script>

<template>
  <naive-provider>
    <n-layout class="h-100vh flex" has-sider>
      <n-layout-sider
        bordered
        :collapsed="collapsed"
        :collapsed-width="64"
        :width="200"
        :inverted="inverted"
        collapse-mode="width"
        class="relative z-13 min-h-100vh shadow"
        show-trigger="bar"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <LayoutLogo :collapsed="collapsed" />
        <LayoutMenu :collapsed="collapsed" :inverted="inverted" />
      </n-layout-sider>
      <n-layout
        :inverted="inverted"
        class="min-h-full"
        content-style="display: flex;flex-direction: column;"
      >
        <n-layout-header :inverted="inverted" position="absolute">
          <LayoutHeader v-model:collapsed="collapsed" :inverted="inverted" />
        </n-layout-header>
        <n-layout-content
          class="relative mt-60px flex flex-1"
          content-style="width: 100%;display: flex;flex-direction: column;"
          :class="{ 'bg-hex-f5f7f9': inverted === false }"
        >
          <div class="flex-1 p-16px">
            <LayoutContent />
          </div>
          <LayoutFooter />
        </n-layout-content>
      </n-layout>
    </n-layout>
  </naive-provider>
</template>

<style scoped></style>
