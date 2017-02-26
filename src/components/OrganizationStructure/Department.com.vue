<template>
  <div>
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
</template>
<style></style>
<script>
  import { ViewBox, Flexbox, FlexboxItem } from 'vux'

  export default{
    pops: {
      departList: {
        type: Array,
        default: []
      }
    },
    components: {
      ViewBox,
      Flexbox,
      FlexboxItem
    }
  }
</script>
