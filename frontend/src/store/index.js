import Vue from 'vue'
import Vuex from 'vuex'
import http from '../http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("access_token") || null,
    content: '',
  },
  getters: {
    logged(state) {
      return state.token !== null;
    }
  },
  mutations: {
    setAuthentication(state, token) {
      state.token = token
    },
    setContent(state, content) {
      state.content = content;
    }
  },
  actions: {
    async authentication(context) {
      const response = await http.post("/login")
      localStorage.setItem("access_token", response.data.access_token)
      context.commit("setAuthentication", response.data.access_token)
    },
    async getContent(context) {
      try {
        const response = await http.get("/protected", {
          headers: {
            Authorization: `Bearer ${context.state.token}`
          }
        })
        context.commit("setContent", response.data.message)
      } catch (error) {
        
      }
      
    }
  },
  modules: {
  }
})
