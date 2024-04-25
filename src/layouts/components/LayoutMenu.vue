<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { generatorMenu } from '@/utils/router'

defineProps<{
  collapsed: boolean
  inverted: boolean
}>()
const route = useRoute()
const router = useRouter()
const routeStore = useRouteStore()
const defaultValue = route.name as string

const menus = generatorMenu(routeStore.routes) as unknown as MenuOption[]

// 点击菜单
function clickMenuItem(key: string) {
  if (/http(s)?:/.test(key))
    window.open(key)
  else
    router.push({ name: key })
}
</script>

<template>
  <n-menu
    :options="menus"
    :inverted="inverted"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="20"
    :indent="15"
    :default-value="defaultValue"
    @update:value="clickMenuItem"
  />
</template>
