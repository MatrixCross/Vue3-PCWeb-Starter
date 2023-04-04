import type { RouteRecordRaw } from 'vue-router'
import layout from '../../layouts/PcLayout.vue'
import home from '~icons/tabler/home'
import component from '~icons/icon-park-outline/figma-component'
import info from '~icons/tabler/info-circle'
import user from '~icons/tabler/user-circle'
import blogger from '~icons/jam/blogger-circle'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: layout,
    meta: {
      isRoot: true,
      icon: () => h(home),
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
      icon: () => h(component),
    },
    children: [
      {
        path: 'keep-alive',
        name: 'KeepAlive',
        component: () => import('@/views/example/KeepAlive.vue'),
        meta: {
          title: '组件缓存',
          keepAlive: true,
          icon: () => h(component),
        },
      },
      {
        path: 'un-keep-alive',
        name: 'UnKeepAlive',
        component: () => import('@/views/example/UnKeep.vue'),
        meta: {
          title: '组件不缓存',
          icon: () => h(component),
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: layout,
    meta: {
      icon: () => h(info),
      title: '关于',
    },
    children: [
      {
        path: 'project',
        name: 'https://github.com/MatrixCross/Vue3-PCWeb-Starter',
        component: layout,
        meta: {
          title: '关于项目',
          icon: () => h(info),
        },
      },
      {
        path: 'author',
        name: 'https://github.com/Wyatex',
        component: layout,
        meta: {
          title: '关于作者',
          icon: () => h(user),
        },
      },
    ],
  },
  {
    path: '/blog',
    name: 'https://wyatex.work',
    component: layout,
    meta: {
      title: '作者博客',
      icon: () => h(blogger),
      isRoot: true,
    },
  },
]

export default routes
