import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Root',
      component: () => import('@/App.vue'),
    },
  ],
})

export default router
