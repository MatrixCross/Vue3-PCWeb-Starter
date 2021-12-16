import { defineStore } from 'pinia'
import { store } from '@/store'
import { constantRoute } from '@/router'

export interface IRouteState {
  keepAliveComponents: string[]
  routes: any[]
}

export const useRouteStore = defineStore({
  id: 'route',
  state: (): IRouteState => ({
    keepAliveComponents: [],
    routes: constantRoute,
  }),
  actions: {
    setKeepAliveComponents(compNames) {
      // 设置需要缓存的组件
      this.keepAliveComponents = compNames
    },
  },
})

export function useRouteStoreOutOfSetup() {
  return useRouteStore(store)
}
