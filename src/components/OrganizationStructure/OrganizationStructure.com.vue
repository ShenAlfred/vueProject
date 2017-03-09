<template>
  <div class="full-page">
    <department></department>
  </div>
</template>
<style>
  @import 'css/organization.scss';
</style>
<script>
  import { ViewBox, Flexbox, FlexboxItem } from 'vux'
  import Department from './Department.com.vue'

  export default{
    data () {
      return {}
    },
    methods: {},
    components: {
      ViewBox,
      Flexbox,
      FlexboxItem,
      Department
    }
  }
</script>
