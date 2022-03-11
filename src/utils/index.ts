import { h } from 'vue'
import { NIcon } from 'naive-ui'
import SvgIcon from '@/components/common/Icons/SvgIcon.vue'

/**
 * render 图标
 * */
export function renderIcon(icon: XiconsComponent) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

export function renderSvgIcon(svgName: string) {
  return () => h(NIcon, null, { default: () => h(SvgIcon, { name: svgName }) })
}
