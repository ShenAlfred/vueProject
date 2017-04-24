<template>
  <div>
    <h1>{{ isYzapp }}</h1>
    <div class="ac">
      <img :src=user.avatar />
      <div>
        <label>用户名字</label>
        <span >{{user.name}}</span>
      </div>
      <div>
        <label>姓名</label>
        <span >{{user.userName}}</span>
      </div>
      <div>
        <label>性别</label>
        <span>{{ user.gender }}</span>
      </div>
      <div>
        <label>企业ID</label>
        <span> {{ user.enterpriseId }}</span>
      </div>
      <div>
        <label>用户ID</label>
        <span>{{ user.openid }}</span>
      </div>
      <div>
        <label>什么鬼？？？？？</label>
        <span> {{ user.email }}</span>
      </div>
      <div>
        <label>什么鬼？？？？？？</label>
        <span> {{ user.cloudpassport }}</span>
      </div>
      <x-button @click.native="changeTitle('臣妾做不到啊')">臣妾做不到啊</x-button>
    </div>
  </div>
</template>
<style>
  .ac {
    text-align: center;
  }
</style>
<script>
  import qingApi from '../../yunapi'
  import { XButton } from 'vux'

  export default{
    components: {
      XButton
    },
    data () {
      return {
        isYzapp: qingApi.isYzjApp() ? '是云之家' : '不是云之家',
        user: {}
      }
    },
    methods: {
      userInfo: function () {
        var _self = this
        qingApi.getPersonInfo((res) => {
          _self.user = res
        })
      },
      changeTitle: (value) => {
        qingApi.setTitle(value)
      }
    },
    created () {
      this.userInfo()
    }
  }
</script>
