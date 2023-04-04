import type { Plugin } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { createGuard } from './guard'

type RouteGlob = {
  [key in string]: {
    default: Array<RouteRecordRaw>
  }
}

// 从modules目录动态导入路由
const modules = import.meta.glob('./modules/**/*.ts', {
  eager: true,
}) as RouteGlob
const routeModuleList: RouteRecordRaw[] = []

Object.keys(modules).forEach(key => {
  const module = modules[key].default || {}
  const modList = Array.isArray(module) ? [...module] : [module]
  routeModuleList.push(...modList)
})

// 导出默认静态路由
export const constantRoute: RouteRecordRaw[] = [...routeModuleList]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL as string),
  routes: routeModuleList,
})

export const routerPlugin = {
  install(app) {
    app.use(router)
    createGuard(router)
  },
} as Plugin

// 也可以使用导出的路由实例进行挂载
export default router
