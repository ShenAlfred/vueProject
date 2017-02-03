<template>
  <transition name="fade">
    <div id='news'style="height: 100%;">
        <router-view></router-view>
    </div>
  </transition>
</template>
<style>
  @import '../../assets/style/animate.scss';
  @import '../../assets/style/comment.scss';
  @import 'TodoList/css/todoitem.scss';
  @import 'TodoList/css/todo.scss';
</style>
<script>
</script>
