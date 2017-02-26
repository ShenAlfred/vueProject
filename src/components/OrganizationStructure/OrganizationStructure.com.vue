<template>
  <div class="full-page">
    <flexbox class="person-ui" orient="vertical" direction="column" :gutter="0">
        <div class="person-department">
        <ul class="department-list">
          <li class="active">
            <a href="javascript:;">
              <i class="fa fa-chevron-left ver-m"></i>
              <span class="ver-m">集团一</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="fa fa-chevron-left ver-m"></i>
              <span class="ver-m">部门一</span>
            </a>
          </li>
        </ul>
      </div>
      <flexbox-item>
        <div class="person-list-content">
          <department data=""></department>
        </div>
      </flexbox-item>
    </flexbox>
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
      return {
        departList: this.getDepartList()
      }
    },
    methods: {
      getDepartList () {

      }
    },
    components: {
      ViewBox,
      Flexbox,
      FlexboxItem,
      Department
    }
  }
</script>
