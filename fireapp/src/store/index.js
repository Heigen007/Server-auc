import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      token: localStorage.getItem('token') || '',
      phone: '+77777777777',
      updated: false
    },
    mutations: {
      st_ch(state, status) {
        state.updated = status
      },
      cr_token(state, token) {
        state.token = token
        localStorage.setItem('token', token)
      }
    },
    actions: {
      logout(){
        localStorage.removeItem('token')
        this.state.token = ''
      },
    },
    getters: {
      isLoggedIn: state => !!state.token
    },
    strict: process.env.DEBUGGING

})
