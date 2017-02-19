<template>
      <view-box ref="viewBox">
        Message
        <router-link to='message/detail'>
          <x-button mini>查看详情</x-button>
        </router-link>
        <x-button type="primary" @click.native="connextWS">connect websocket</x-button>
        <x-button type="warn" @click.native="disConnectWS">disconnect websocket</x-button>
        <NavBar></NavBar>
      </view-box>
</template>
<style>
</style>
<script>
    import NavBar from '../../components/common/tabbar/nav'
    import { XButton, ViewBox } from 'vux'
    import io from 'socket.io-client'

    let socket

    export default {
      components: {
        NavBar,
        ViewBox,
        XButton
      },
      data () {
        return {}
      },
      methods: {
        connextWS () {
          var userId = new Date().getTime()
          socket = io('ws://localhost:3000')
          socket.emit('login', {id: userId, userName: 'Alfred'})
        },
        disConnectWS () {
          socket.emit('exit', {userName: 'Alfred'})
          socket.disconnect()
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
