/*global Vue*/
import Router from 'vue-router'
import home from '@/views/home'
import topic from '@/views/topic'
import calsscify from '@/views/class'
import shop from '@/views/shop'
import my from '@/views/my'

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
    },
      {
          path: '/topic',
          component: topic
      },
    {
        path: '/class',
        component: calsscify
    },
    {
        path: '/shop',
        component: shop
    },
      {
          path: '/my',
          component: my
      }
  ]
})
