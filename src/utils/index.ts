import { h } from 'vue'
import { NIcon } from 'naive-ui'
import { Icon } from '@iconify/vue'
import SvgIcon from '@/components/common/Icons/SvgIcon.vue'

/**
 * render n-icon图标
 * */
export function renderIcon(icon: XiconsComponent) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

/**
 * render svg-icon图标
 * */
export function renderSvgIcon(svgName: string) {
  return () => h(NIcon, null, { default: () => h(SvgIcon, { name: svgName }) })
}

/**
 * 动态渲染iconify
 * @param icon - 图标名称
 * @param color - 图标颜色
 * @param size - 图标大小
 */
 export function iconifyRender(icon: string, color?: string, size?: number) {
  const style: { color?: string; size?: string } = {};
  if (color) {
    style.color = color;
  }
  if (size) {
    style.size = `${size}px`;
  }
  return () => h(Icon, { icon, style });
}
