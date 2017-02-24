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
          <h6 class="person-assign">下级部门</h6>
          <div class="person-list">
            <dl>
              <dd class="list-item">
                <flexbox>
                  <flexbox-item>
                    <div class="ellipsis">
                      AA
                    </div>
                  </flexbox-item>
                  <div class="available-to">
                    <span class="countable">169</span>
                    <i class="fa fa-chevron-right"></i>
                  </div>
                </flexbox>
              </dd>
              <dd class="list-item">
                <flexbox>
                  <flexbox-item>
                    <div class="ellipsis">
                      CC
                    </div>
                  </flexbox-item>
                  <div class="available-to">
                    <span class="countable">12</span>
                    <i class="fa fa-chevron-right"></i>
                  </div>
                </flexbox>
              </dd>
              <dd class="list-item">
                <flexbox>
                  <flexbox-item>
                    <div class="ellipsis">
                      DD
                    </div>
                  </flexbox-item>
                  <div class="available-to">
                    <span class="countable">42</span>
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
<style>
  @import 'css/organization.scss';
</style>
<script>
  import { ViewBox, Flexbox, FlexboxItem } from 'vux'
  export default{
    components: {
      ViewBox,
      Flexbox,
      FlexboxItem
    }
  }
</script>
