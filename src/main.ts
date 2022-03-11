import 'virtual:windi.css'
import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import App from './App.vue'
import { store } from '@/store'
import { setupRouter } from '@/router'
import icons from './plugins/icons'

const app = createApp(App)
app.use(icons)
app.use(store)
setupRouter(app)
app.mount('#app')
