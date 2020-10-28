import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import auth from '../components/auth.vue'
import login from '../components/login.vue'
import auccion from '../components/auccion.vue'
import Hello from '../components/hello.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/?',
    name: 'App',
    component: App
  },
  {
    path: '/',
    name: 'hello',
    component: Hello
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/auccion',
    name: 'auccion',
    component: auccion
  }
]

const router = new VueRouter({
  routes
})

export default router
