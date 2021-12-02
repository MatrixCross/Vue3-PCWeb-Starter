import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

// 从modules目录动态导入路由
const modules = import.meta.globEager('./modules/**/*.ts')
const routeModuleList: RouteRecordRaw[] = []

Object.keys(modules).forEach(key => {
  const module = modules[key].default || {}
  const modList = Array.isArray(module) ? [...module] : [module]
  routeModuleList.push(...modList)
})

// 加入首页
routeModuleList.push({
  path: '/',
  name: 'Root',
  redirect: '/home',
})

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: routeModuleList,
})

// 挂载路由
export function setupRouter(app: App<Element>) {
  app.use(router)
}

// 也可以使用导出的路由实例进行挂载
export default router
