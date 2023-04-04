import 'uno.css'
// 统一浏览器默认样式
import '@unocss/reset/normalize.css'
import '@/assets/styles/index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { store } from '@/store'
import { routerPlugin } from '@/router'

/**
 * 加载页面，可以在mount的前后执行任务
 */
function startApp() {
  createApp(App).use(store).use(routerPlugin).mount('#app')
}

startApp()
