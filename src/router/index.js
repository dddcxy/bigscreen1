import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/pages/mainPage.vue'
import sbjffx from '@/pages/sbjffx.vue'
import ldrkda from '@/pages/ldrkda.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/sbjffx',
      name: 'sbjffx',
      component: sbjffx
    },
    {
      path: '/ldrkda',
      name: 'ldrkda',
      component: ldrkda
    }
  ]
})
