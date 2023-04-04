import { defineStore } from 'pinia'
import { animationType } from '@/settings'

export const useSettingStore = defineStore({
  id: 'setting',
  state: () => ({
    darkTheme: false,
    animationType,
  }),
  getters: {
    getDarkTheme(): boolean {
      return this.darkTheme
    },
  },
  actions: {},
})
