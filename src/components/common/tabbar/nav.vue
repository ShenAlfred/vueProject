<template>
  <div class="weui_tabbar">
    <router-link to="/home" class="weui_tabbar_item" active-class="weui_bar_item_on">
      <div class="weui_tabbar_icon">
        <span class="fa fa-home fa-lg fc888"></span>
      </div>
      <p class="weui_tabbar_label">
        <span>Home</span>
      </p>
    </router-link>
    <router-link to="/message" class="weui_tabbar_item" active-class="weui_bar_item_on">
      <div class="weui_tabbar_icon">
        <span class="fa fa-envelope fa-lg fc888"></span>
      </div>
      <p class="weui_tabbar_label">
        <span>Message</span>
      </p>
    </router-link>
    <router-link to="/news" class="weui_tabbar_item" active-class="weui_bar_item_on">
      <div class="weui_tabbar_icon">
        <span class="fa fa-newspaper-o fa-lg fc888"></span>
      </div>
      <p class="weui_tabbar_label">
        <span>News</span>
      </p>
    </router-link>
  </div>
</template>
<style></style>
<script>
  import { ViewBox, Tabbar, TabbarItem } from 'vux'

  export default{
    name: 'nav',
    components: {
      ViewBox,
      Tabbar,
      TabbarItem
    }
  }
</script>
