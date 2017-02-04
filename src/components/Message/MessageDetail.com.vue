<template>
  <transition name='fade'>
    <div v-if="state=='detail'">
        message detail <br />
        <router-link to="#more">
          <x-button type="primary">{{ load_more_text }}</x-button>
        </router-link>
    </div>
    <message-detail-more v-if="state=='more'"></message-detail-more>
  </transition>
</template>
<style>
  @import '../../assets/style/animate.scss'
</style>
<script>
  import MessageDetailMore from './MessageDetailMore.com'
  import { XButton } from 'vux'

  export default {
    components: {
      MessageDetailMore,
      XButton
    },
    data () {
      return {
        load_more_text: '详情中的更多,还想怎么样!!!',
        count: 0,
        state: 'detail'
      }
    },
    methods: {
      more () {
        var hash = window.location.hash
        hash += '#more'
        this.state = 'more'
        window.location.hash = hash
      }
    },
    watch: {
      $route () {
        var patten = new RegExp('#more')
        if (patten.test(window.location.hash)) {
          this.state = 'more'
        } else {
          this.state = 'detail'
        }
      }
    },
    beforeCreate () {
      console.log('创建前')
      console.log(this.state)
    },
    created () {
      console.log('创建后')
      console.log(this.state)
    },
    beforeMount () {
      console.log('mount之前')
      console.log(this.state)
    },
    mounted () {
      console.log('mount之后')
      console.log(this.state)
    },
    beforeUpdate () {
      console.log('更新前')
      console.log(this.state)
    },
    updated () {
      console.log('更新完成')
      console.log(this.state)
    },
    beforeDestroy () {
      console.log('销毁前')
      console.log(this.state)
    },
    destroyed () {
      console.log('已销毁')
      console.log(this.state)
    }
  }
</script>
