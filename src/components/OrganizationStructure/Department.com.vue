<template>
  <div>
    <flexbox class="person-ui" orient="vertical" direction="column" :gutter="0">
    <div class="person-department">
      <ul class="department-list">
        <li class="active">
          <a href="javascript:;">
            <i class="fa fa-chevron-left ver-m"></i>
            <span class="ver-m">集团</span>
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
        <h6 class="person-assign">下级部门</h6>
        <div class="person-list">
          <dl>
            <dd class="list-item" v-for="(dep, index) in departments">
              <flexbox @click.native=getData(dep.id)>
                <flexbox-item>
                  <div class="ellipsis">
                    {{ dep.name }}
                  </div>
                </flexbox-item>
                <div class="available-to">
                  <span class="countable">{{ dep.persons_number }}</span>
                  <i class="fa fa-chevron-right"></i>
                </div>
              </flexbox>
            </dd>
          </dl>
        </div>
      </div>
    </flexbox-item>
    </flexbox>
  </div>
</template>
<style></style>
<script>
  import { ViewBox, Flexbox, FlexboxItem } from 'vux'
  import config from '../../config'

  export default{
    data () {
      return {
        departments: this.getDepartList()
      }
    },
    methods: {
      getDepartList () {
        this.$http.get(config.baseUrl + '/Department', {}).then(function (res) {
          this.departments = res.body.Departments
        }, function (res) {
          console.log(res)
        })
      },
      getData (id) {
        this.$http.get(config.baseUrl + '/Department1', {
          params: {
            id: id
          }
        }).then((res) => {
          this.departments = res.body.Departments
        })
      }
    },
    components: {
      ViewBox,
      Flexbox,
      FlexboxItem
    }
  }
</script>
