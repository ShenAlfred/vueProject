<template>
      <view-box ref="viewBox">
        <TodoList></TodoList>
        <NavBar></NavBar>
      </view-box>
</template>
<style>
</style>
<script>
    import NavBar from '../../components/common/tabbar/nav'
    import TodoList from './TodoList/todo.com'
    import { ViewBox } from 'vux'

    export default {
      components: {
        NavBar,
        ViewBox,
        TodoList
      },
      data () {
        return {
          // note: changing this line won't causes changes
          // with hot-reload because the reloaded component
          // preserves its current state and we are modifying
          // its initial state.
          msg: 'Hello World!'
        }
      }
    }
</script>
