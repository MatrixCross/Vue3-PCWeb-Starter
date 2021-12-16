<template>
  <n-menu
    :options="menus"
    :inverted="inverted"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="20"
    :indent="24"
    :default-value="defaultValue"
    @update:value="clickMenuItem"
  />
</template>

<script lang="ts" setup>
import { NMenu } from 'naive-ui'
import { useRouter, useRoute } from 'vue-router'
import { generatorMenu } from '@/utils/router'
import { useRouteStore } from '@/store/modules/route'
const route = useRoute()
const router = useRouter()
const routeStore = useRouteStore()
const defaultValue = route.name as string

let menus = generatorMenu(routeStore.routes)

// 点击菜单
function clickMenuItem(key: string) {
  if (/http(s)?:/.test(key)) {
    window.open(key)
  } else {
    router.push({ name: key })
  }
}

defineProps<{
  collapsed: boolean
  inverted: boolean
}>()
</script>
