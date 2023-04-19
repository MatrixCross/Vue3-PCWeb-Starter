<template>
  <n-layout-footer
    class="flex items-center justify-center min-h-40px"
    :class="{ 'bg-white': inverted === false }"
  >
    <div class="footer">Copyright ©2023 Vue3 Starter</div>
  </n-layout-footer>
</template>

<script setup lang="ts">
const settingStore = useSettingStore()
const inverted = computed(() => settingStore.darkTheme)
</script>
