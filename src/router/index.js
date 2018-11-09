import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import H2 from '@/components/vte01/H2'
import te02t01 from '@/components/te02/te01'
import Com from '@/components/te03/te04'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: te02t01
    }
  ]
})
