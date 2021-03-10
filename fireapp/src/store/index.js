import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      token: 'User',
      name: 'UserName'
    },
    getters: {
      isLoggedIn: state => !!state.token
    },
    strict: process.env.DEBUGGING
  })

  return Store
}
