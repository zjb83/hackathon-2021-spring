import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import("../views/home.vue")
  },
  {
    path: '/deal',
    name: 'deal',
    component: ()=>import("../views/deal.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router