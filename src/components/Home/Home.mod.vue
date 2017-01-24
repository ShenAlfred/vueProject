<template>
  <div id='home'>
    <router-view></router-view>
  </div>
</template>
<style>
</style>
<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import Home from './HomeVux'

    Vue.use(VueRouter)

    const router = new VueRouter({
      routes: [
        {
          path: '/',
          component: Home
        }
      ]
    })

    export default router

</script>
