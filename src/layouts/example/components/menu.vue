<template>
  <n-menu
    :options="menus"
    :inverted="inverted"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="20"
    :indent="24"
    @update:value="clickMenuItem"
  />
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { NMenu, NIcon } from 'naive-ui'
import { useRouter } from 'vue-router'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
} from '@vicons/ionicons5'

defineProps<{
  collapsed: boolean
  inverted: boolean
}>()

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menus = [
  {
    label: '首页',
    key: 'home',
    icon: renderIcon(BookIcon),
  },
  {
    label: '关于',
    key: 'about',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: '关于项目',
        key: 'about-project',
        icon: renderIcon(PersonIcon),
      },
      {
        label: '关于作者',
        key: 'about-author',
        icon: renderIcon(PersonIcon),
      },
    ],
  },
  {
    label: '作者博客',
    key: 'https://wyatex.gitee.io',
    icon: renderIcon(BookIcon),
  },
]

const router = useRouter()
// 点击菜单
function clickMenuItem(key: string) {
  if (/http(s)?:/.test(key)) {
    window.open(key)
  } else {
    router.push({ name: key })
  }
}
</script>
