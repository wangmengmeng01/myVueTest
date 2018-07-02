import Vue from 'vue'
import Router from 'vue-router'
import a from '@/components/a'
import b from '@/components/b'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      name: 'a',
      component: a,
      meta:{
        keepAlive:true
      }
    },
    {
      path: '/b',
      name: 'b',
      component: b,
      meta:{
        keepAlive:true
      }
    }
  ]
})
