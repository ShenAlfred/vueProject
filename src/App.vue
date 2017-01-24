<template>
  <div style="height: 100%;">
    <view-box ref="viewBox">
      <router-view></router-view>
    </view-box>
  </div>
</template>

<script>
  import { ViewBox } from 'vux'

  export default {
    components: {
      ViewBox
    }
  }
</script>

<style>
@import '~vux/src/styles/reset.less';
@import 'assets/style/reset.scss';
@import 'assets/font-awesome-4.7.0/css/font-awesome.min.css';
@import '~animate.css/animate.min.css'

  body {
    background-color: #fbf9fe;
  }
  body, html {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
</style>
