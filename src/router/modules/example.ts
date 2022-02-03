import { RouteRecordRaw } from 'vue-router'
import { renderIcon, renderSvgIcon } from '@/utils'
import layout from '@/layouts/index.vue'
import {
  PersonOutline as PersonIcon,
  HomeOutline as HomeIcon,
  InformationCircleOutline as InfoIcon,
} from '@/components/common/Icons'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: layout,
    meta: {
      isRoot: true,
      icon: renderIcon(HomeIcon),
    },
    children: [
      {
        path: '',
        name: 'home-index',
        component: () => import('@/views/example/homePage.vue'),
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
      icon: renderSvgIcon('component'),
    },
    children: [
      {
        path: 'keep-alive',
        name: 'KeepAlive',
        component: () => import('@/views/example/KeepAlive.vue'),
        meta: {
          title: '组件缓存',
          keepAlive: true,
          icon: renderSvgIcon('component'),
        },
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: layout,
    meta: {
      icon: renderIcon(InfoIcon),
      title: '关于',
    },
    children: [
      {
        path: 'project',
        name: 'AboutProject',
        component: () => import('@/views/example/AboutProject.vue'),
        meta: {
          title: '关于项目',
          icon: renderSvgIcon('project'),
        },
      },
      {
        path: 'author',
        name: 'AboutAuthor',
        component: () => import('@/views/example/AboutAuthor.vue'),
        meta: {
          title: '关于作者',
          icon: renderIcon(PersonIcon),
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
      icon: renderSvgIcon('blog'),
      isRoot: true,
    },
  },
]

export default routes
