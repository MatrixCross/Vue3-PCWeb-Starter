import { RouteRecordRaw } from 'vue-router'

import layout from '@/layouts/example/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: layout,
    children: [
      {
        path: '',
        name: 'home-index',
        component: () => import('@/views/example/homePage.vue'),
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
        name: 'about-project',
        component: () => import('@/components/HelloWorld.vue'),
      },
      {
        path: 'author',
        name: 'about-author',
        component: () => import('@/components/HelloWorld.vue'),
      },
    ],
  },
]

export default routes
