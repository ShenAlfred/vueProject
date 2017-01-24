// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'

import Home from './components/Home/HomeVux'
import News from './components/News/NewsVux'
import Message from './components/Message/MessageVux'
import MessageDetail from './components/Message/MessageDetailVux'
import MessageRouter from './components/Message/Message.RouterView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/message',
    component: MessageRouter,
    children: [
      {
        path: '/',
        component: Message
      },
      {
        path: '/message/detail',
        component: MessageDetail
      }
    ]
  },
  {
    path: '/News',
    component: News
  }
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

