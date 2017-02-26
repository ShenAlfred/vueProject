<template>
    <view-box>
      <grid>
        <div v-for="grid in grids">
          <router-link :to="grid.url">
            <grid-item :label="grid.name">
                <img slot="icon" :src="grid.icon">
            </grid-item>
          </router-link>
        </div>
      </grid>

      <NavBar></NavBar>
    </view-box>
</template>

<script>
  import NavBar from '../../components/common/tabbar/nav'
  import { ViewBox, Grid, GridItem } from 'vux'
  import config from '../../config'

  export default {
    components: {
      NavBar,
      ViewBox,
      Grid,
      GridItem
    },
    data () {
      return {
        grids: []
      }
    },
    methods: {
    },
    created () {
      this.$http.get(config.baseUrl + '/Grids', {}).then((success) => {
        this.grids = success.body.Grids
      }, (error) => {
        console.log(error)
      })
    }
  }

</script>

<style>
</style>
