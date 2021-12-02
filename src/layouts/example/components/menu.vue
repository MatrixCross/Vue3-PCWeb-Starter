<template>
  <n-menu
    :options="menus"
    :inverted="inverted"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="20"
    :indent="24"
    default-value="home-index"
    @update:value="clickMenuItem"
  />
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { NMenu, NIcon } from 'naive-ui'
import { useRouter } from 'vue-router'
import {
  PersonOutline as PersonIcon,
  HomeOutline as HomeIcon,
  InformationCircleOutline as InfoIcon,
} from '@vicons/ionicons5'
import BlogIcon from './icons/blogIcon.vue'
import ProjectIcon from './icons/projectIcon.vue'

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
    key: 'home-index',
    icon: renderIcon(HomeIcon),
  },
  {
    label: '关于',
    key: 'about',
    icon: renderIcon(InfoIcon),
    children: [
      {
        label: '关于项目',
        key: 'about-project',
        icon: renderIcon(ProjectIcon),
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
    icon: renderIcon(BlogIcon),
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
