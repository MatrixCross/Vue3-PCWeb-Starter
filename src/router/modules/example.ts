import { RouteRecordRaw } from 'vue-router'

import layout from '@/layouts/example/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    name: 'RedirectComponent',
    component: layout,
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'RedirectComponent',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },
  {
    path: '/home',
    name: 'home',
    component: layout,
    children: [
      {
        path: '',
        name: 'home-index',
        component: () => import('@/views/example/homePage.vue'),
        meta: {
          title: '首页',
        },
      },
      {
        path: 'keep-alive',
        name: 'KeepAlive',
        component: () => import('@/views/example/KeepAlive.vue'),
        meta: {
          title: '组件缓存',
          keepAlive: true,
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: layout,
    children: [
      {
        path: 'project',
        name: 'AboutProject',
        component: () => import('@/views/example/AboutProject.vue'),
        meta: {
          title: '关于项目',
        },
      },
      {
        path: 'author',
        name: 'AboutAuthor',
        component: () => import('@/views/example/AboutAuthor.vue'),
        meta: {
          title: '关于作者',
        },
      },
    ],
  },
]

export default routes
