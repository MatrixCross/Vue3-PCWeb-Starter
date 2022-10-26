import 'uno.css';
import { createApp } from 'vue'
import App from './App.vue'
import { store } from '@/store'
import { setupRouter } from '@/router'

const app = createApp(App)
app.use(store)
setupRouter(app)
app.mount('#app')
