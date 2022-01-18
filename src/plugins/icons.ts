/**
 * 挂载所有icons
 */
import * as icons from '@/components/common/Icons'

export default {
  install: Vue => {
    Object.keys(icons).forEach(key => {
      Vue.component(key, icons[key])
    })
  },
}
