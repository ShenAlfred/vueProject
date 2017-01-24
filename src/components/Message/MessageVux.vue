<template>
    <div>
      Message
      <NavBar></NavBar>
    </div>
</template>
<style>
</style>
<script>
    import NavBar from '../../components/common/tabbar/nav'
    export default {
      components: {
        NavBar
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
