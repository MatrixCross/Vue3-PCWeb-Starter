import { useRouteStoreOutOfSetup } from '@/store/modules/route'
import { storage } from '@/utils/storage'
import { isNavigationFailure, Router } from 'vue-router'

export function createGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    const Loading = window['$loading'] || null
    Loading && Loading.start()

    // 可以执行token检查业务，比如token失效了跳转login页面
    const token = storage.get('token')
    if (!token) {
      //   if (to.meta.ignoreAuth) {
      //     next()
      //     return
      //   }
      //   // redirect login page
      //   const redirectData: {
      //     path: string
      //     replace: boolean
      //     query?: Recordable<string>
      //   } = {
      //     path: '/login',
      //     replace: true,
      //   }
      //   if (to.path) {
      //     redirectData.query = {
      //       ...redirectData.query,
      //       redirect: to.path,
      //     }
      //   }
      //   next(redirectData)
      //   return
    }

    next()
    Loading && Loading.finish()
  })

  router.afterEach((to, _, failure) => {
    document.title = (to?.meta?.title as string) || document.title
    if (isNavigationFailure(failure)) {
      console.error('failed navigation', failure)
    }

    const routeStore = useRouteStoreOutOfSetup()
    // 在这里设置需要缓存的组件名称
    const keepAliveComponents = routeStore.keepAliveComponents
    const currentComName: any = to.matched.find(
      item => item.name == to.name
    )?.name
    if (
      currentComName &&
      !keepAliveComponents.includes(currentComName) &&
      to.meta?.keepAlive
    ) {
      // 需要缓存的组件
      keepAliveComponents.push(currentComName)
    } else if (!to.meta?.keepAlive || to.name == 'Redirect') {
      // 不需要缓存的组件
      const index = routeStore.keepAliveComponents.findIndex(
        name => name == currentComName
      )
      if (index != -1) {
        keepAliveComponents.splice(index, 1)
      }
    }
    routeStore.setKeepAliveComponents(keepAliveComponents)

    const Loading = window['$loading'] || null
    Loading && Loading.finish()
  })

  router.onError(error => {
    console.error('路由错误:', error)
  })
}
