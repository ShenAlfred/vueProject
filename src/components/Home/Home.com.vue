<template>
    <view-box ref="viewBox">
      Home <br />
      <button v-on:click="show =!show">{{ msg }}</button>
      {{ counter }}
      <transition name="fade">
        <p v-if="show">{{ msg }}</p>
      </transition>
      <NavBar></NavBar>
    </view-box>
</template>

<script>
  import NavBar from '../../components/common/tabbar/nav'
  import FastClick from 'fastclick'
  import { ViewBox } from 'vux'

  FastClick.attach(document.body)

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
        msg: 'Hello World!',
        show: true,
        counter: 0
      }
    }
  }

</script>

<style>
</style>
