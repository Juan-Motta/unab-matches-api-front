import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'store',
  state: () => ({
    isLogged: false,
    token: null,
    userId: 1
  }),
  getters: {
    getIsLogged: (state) => state.isLogged,
    getToken: (state) => state.token,
    getUserId: (state) => state.userId
  },
  actions: {
    login() {
      this.isLogged = !this.isLogged;
    },
    setToken(token) {
      this.token = token
    },
    setUserId(userId) {
      this.userId = userId;
    }
  }
})
