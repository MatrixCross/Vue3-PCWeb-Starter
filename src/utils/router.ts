import type { RouteRecordRaw } from 'vue-router'

/**
 * 判断根路由 Router
 * */
export function isRootRouter(item: RouteRecordRaw) {
  return item.meta?.isRoot === true && item.children?.length === 1
}

/**
 * 排除Router
 * */
export function filterRouter(routerMap: Array<RouteRecordRaw>) {
  return routerMap.filter(item => {
    return (
      (item.meta?.hidden || false) != true &&
      !['/:path(.*)*', '/', '/redirect'].includes(item.path)
    )
  })
}

/**
 * 递归组装菜单格式
 */
export function generatorMenu(routerMap: Array<RouteRecordRaw>) {
  return filterRouter(routerMap).map(item => {
    const isRoot = isRootRouter(item)
    if (!item.children) {
      return {
        ...item,
        label: item.meta?.title,
        key: item.name,
        icon: item.meta?.icon,
      }
    }
    const info = isRoot ? item.children[0] : item
    const currentMenu = {
      ...info,
      ...info.meta,
      label: info.meta?.title,
      key: info.name,
      icon: isRoot ? item.meta?.icon : info.meta?.icon,
    }
    // 是否有子菜单，并递归处理
    if (!isRoot && info.children && info.children.length > 0) {
      // Recursion
      currentMenu.children = generatorMenu(info.children)
    }
    return currentMenu
  })
}
