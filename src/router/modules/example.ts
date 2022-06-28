import type { RouteRecordRaw } from 'vue-router'
import { iconifyRender } from '@/utils'
import layout from '../../layouts/index.vue'
import { h } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: layout,
    meta: {
      isRoot: true,
      icon: iconifyRender('tabler:home'),
    },
    children: [
      {
        path: '',
        name: 'home-index',
        component: () => import('@/views/example/HomePage.vue'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/comp',
    name: 'comp',
    component: layout,
    meta: {
      title: '组件实例',
      icon: iconifyRender('icon-park-outline:figma-component'),
    },
    children: [
      {
        path: 'keep-alive',
        name: 'KeepAlive',
        component: () => import('@/views/example/KeepAlive.vue'),
        meta: {
          title: '组件缓存',
          keepAlive: true,
          icon: iconifyRender('icon-park-outline:figma-component'),
        },
      },
      {
        path: 'un-keep-alive',
        name: 'UnKeepAlive',
        component: () => import('@/views/example/UnKeep.vue'),
        meta: {
          title: '组件不缓存',
          icon: iconifyRender('icon-park-outline:figma-component'),
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: layout,
    meta: {
      icon: iconifyRender('tabler:info-circle'),
      title: '关于',
    },
    children: [
      {
        path: 'project',
        name: 'AboutProject',
        component: () => import('@/views/example/AboutProject.vue'),
        meta: {
          title: '关于项目',
          icon: iconifyRender('tabler:stack-2'),
        },
      },
      {
        path: 'author',
        name: 'AboutAuthor',
        component: () => import('@/views/example/AboutAuthor.vue'),
        meta: {
          title: '关于作者',
          icon: iconifyRender('tabler:user-circle'),
        },
      },
    ],
  },
  {
    path: '/blog',
    name: 'https://wyatex.gitee.io',
    component: layout,
    meta: {
      title: '作者博客',
      icon: iconifyRender('jam:blogger-circle'),
      isRoot: true,
    },
  },
]

export default routes
