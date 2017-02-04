<template>
      <view-box ref="viewBox">
        Message
        <router-link to='message/detail'>
          <x-button mini>查看详情</x-button>
        </router-link>
        <NavBar></NavBar>
      </view-box>
</template>
<style>
</style>
<script>
    import NavBar from '../../components/common/tabbar/nav'
    import { XButton, ViewBox } from 'vux'

    export default {
      components: {
        NavBar,
        ViewBox,
        XButton
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
      methods: {
        seeMore () {

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
