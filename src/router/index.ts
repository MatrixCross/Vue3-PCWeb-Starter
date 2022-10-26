import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createGuard } from './guard'

// 从modules目录动态导入路由
const modules = import.meta.globEager('./modules/**/*.ts')
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
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL as string),
  routes: routeModuleList,
})

// 挂载路由和创建路由守卫
export function setupRouter(app: App<Element>) {
  app.use(router)
  createGuard(router)
}

// 也可以使用导出的路由实例进行挂载
export default router
