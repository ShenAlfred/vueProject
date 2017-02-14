<template>
    <view-box ref="viewBox">
      Home <br />
      <button v-on:click="calculate_count">{{ msg }}</button>
      {{ counter }}
      <transition name="fade">
        <p v-if="show">{{ msg }}</p>
      </transition>
      <NavBar></NavBar>
    </view-box>
</template>

<script>
  import NavBar from '../../components/common/tabbar/nav'
  import { ViewBox } from 'vux'
  import Store from '../../components/store/store'

  export default {
    components: {
      NavBar,
      ViewBox
    },
    data () {
      return {
        msg: 'Hello World!',
        show: true,
        counter: Store.state.count
      }
    },
    computed: {
    },
    methods: {
      calculate_count () {
        Store.commit('increment')
        this.counter = Store.state.count
      }
    }
  }

</script>

<style>
</style>
