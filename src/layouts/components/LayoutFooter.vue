<script setup lang="ts">
const settingStore = useSettingStore()
const inverted = computed(() => settingStore.darkTheme)
</script>

<template>
  <n-layout-footer
    class="min-h-40px flex items-center justify-center"
    :class="{ 'bg-white': inverted === false }"
  >
    <div class="footer">
      Copyright ©2023 Vue3 Starter
    </div>
  </n-layout-footer>
</template>
