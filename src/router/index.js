import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import registration from '@/components/registration'
import form from '@/components/form'
import home from '@/components/Home'
import example from '@/components/example'
import index from '@/components/index'
import mainform from '@/components/MainForm'
import dynamic from '@/components/DynamicForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/registration',
      name: 'registration',
      component: registration
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/example',
      name: 'example',
      component: example
    },
    {
      path: '/mainform',
      name: 'mainform',
      component: mainform
    },
    // nothing imp just for checking
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    }
  ]
})