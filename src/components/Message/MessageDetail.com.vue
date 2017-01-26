<template>
  <transition name='fade'>
    <div v-if="state=='detail'">
        message detail
        <button v-on:click="more">{{ load_more_text }}</button>
    </div>
    <message-detail-more v-if="state=='more'"></message-detail-more>
  </transition>
</template>
<style>
  @import '../../assets/style/animate.scss'
</style>
<script>
  import MessageDetailMore from './MessageDetailMore.com'

  export default {
    components: {
      MessageDetailMore
    },
    data () {
      return {
        load_more_text: '点击查看更多',
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
        console.log(1111)
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
