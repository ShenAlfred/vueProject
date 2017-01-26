<template>
      <view-box ref="viewBox">
        Message
        <NavBar></NavBar>
      </view-box>
</template>
<style>
</style>
<script>
    import NavBar from '../../components/common/tabbar/nav'
    import { ViewBox } from 'vux'

    export default {
      components: {
        NavBar,
        ViewBox
      },
      data () {
        return {
          // note: changing this line won't causes changes
          // with hot-reload because the reloaded component
          // preserves its current state and we are modifying
          // its initial state.
          msg: 'Hello World!'
        }
      },
      beforeCreate () {
        console.log('创建前')
        console.log(this)
      },
      created () {
        console.log('创建后')
        console.log(this)
      }
    }
</script>
