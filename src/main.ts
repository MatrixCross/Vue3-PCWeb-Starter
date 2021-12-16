import './styles/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import { store } from '@/store'
import { setupRouter } from '@/router'
import naive from '@/plugins/naive'

const app = createApp(App)
app.use(naive)
app.use(store)
setupRouter(app)
app.mount('#app')
