import type { RouteRecordRaw } from 'vue-router'
import layout from '../../layouts/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    name: 'RedirectComponent',
    component: layout,
    meta: {
      hidden: true,
      hideBreadcrumb: true,
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'RedirectComponent',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },
  {
    path: '/',
    name: 'Root',
    redirect: '/home',
  },
]

export default routes
