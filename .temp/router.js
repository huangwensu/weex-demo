import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import home from '@/views/home'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    }
  ]
})
