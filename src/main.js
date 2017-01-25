// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'

import Home from './components/Home/Home.com'
import News from './components/News/News.com'
import Message from './components/Message/Message.com'
import MessageDetail from './components/Message/MessageDetail.com'
import MessageRouter from './components/Message/Message.mod.vue'
import HomeRouter from './components/Home/Home.mod.vue'
import NewsRouter from './components/News/News.mod.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: HomeRouter,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
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
    component: NewsRouter,
    children: [
      {
        path: '/',
        component: News
      }
    ]
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

