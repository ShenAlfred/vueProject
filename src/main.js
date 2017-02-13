// // The Vue build version to load with the `import` command
// // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import routes from './configRouter'

Vue.use(VueResource)
Vue.use(VueRouter)

window.location.hash = 'home'
FastClick.attach(document.body)

let routes = ConfigRouter

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

