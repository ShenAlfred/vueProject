<template>
  <div id='news'>
    <router-view></router-view>
  </div>
</template>
<style>
</style>
<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'
    import News from './NewsVux'

    Vue.use(VueRouter)

    const router = new VueRouter({
      routes: [
        {
          path: '/news',
          component: News
        }
      ]
    })

    export default router

</script>
