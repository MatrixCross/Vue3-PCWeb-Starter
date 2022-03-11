/**
 * 挂载所有icons
 */
import * as icons from '@/components/common/Icons'
import type { App } from 'vue'

type IconsName = keyof typeof icons

export default {
  install: (Vue: App) => {
    Object.keys(icons).forEach(key => {
      Vue.component(key, icons[key as IconsName])
    })
  },
}
