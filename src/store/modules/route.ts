import { nextTick } from 'vue'
import { defineStore } from 'pinia'
import { store } from '@/store'
import { constantRoute } from '@/router'

export interface IRouteState {
  keepAliveComponents: string[]
  routes: any[]
  reloadFlag: boolean
}

export const useRouteStore = defineStore({
  id: 'route',
  state: (): IRouteState => ({
    keepAliveComponents: [],
    routes: constantRoute,
    reloadFlag: true,
  }),
  actions: {
    setKeepAliveComponents(compNames: string[]) {
      // 设置需要缓存的组件
      this.keepAliveComponents = compNames
    },
    /**
     * 重载页面
     * @param duration - 重载的延迟时间(ms)
     */
    async reloadPage(duration = 0) {
      this.reloadFlag = false
      await nextTick()
      if (duration) {
        setTimeout(() => {
          this.reloadFlag = true
        }, duration)
      } else {
        this.reloadFlag = true
      }
      setTimeout(() => {
        document.documentElement.scrollTo({ left: 0, top: 0 })
      }, 100)
    },
  },
})

export function useRouteStoreOutOfSetup() {
  return useRouteStore(store)
}
