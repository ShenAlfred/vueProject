<template>
  <div>
    <div id="todo-list-search">
      <flexbox>
        <div class="percent80">
          <input type="text" v-model="task" placeholder="please input todo task!">
        </div>
        <flexbox-item>
          <x-button @click.native="submitTodo">TODO</x-button>
        </flexbox-item>
      </flexbox>
    </div>
    <div id="todo-list">
      <div class="todo-list-item" v-for="(item, index) in tasks">
        <flexbox>
          <div class="todo-content">
            <span class="ellipsis" v-show="!item.isEdit">{{ item._task }}</span>
            <input type="text" v-model="item._task" v-bind:value="item.task" v-show="item.isEdit">
          </div>
          <flexbox-item class="ac">
            <i class="fa icon-btn primary" v-bind:class="[ item.isEdit ? 'fa-check' : 'fa-edit' ]" v-on:click="editTask(index)"></i>
            <i class="fa fa-remove icon-btn warn" v-on:click="removeTask(index)"></i>
          </flexbox-item>
        </flexbox>
      </div>
    </div>
  </div>
</template>
<style>
  @import '../../../assets/style/comment.scss';


  #todo-list-search {
    margin-top: 10px;
    background: #efefef;
    padding: 10px 5px;
  }
  input[type="text"] {
    height: 100%;
    width: 100%;
    padding: 10px 10px;
    outline: none;
    border: 1px solid #888;
    border-radius: 5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #todo-list {
    margin-top: 10px;
    border-top: 1px solid #c8c8c8;
  }
  .todo-list-item{
    border-bottom: 1px solid #c8c8c8;
    background: #fff;
    padding: 15px 10px;
  }
  .todo-content {
    position: relative;
    color: #333;
    width: 80%;
  }
  .icon-btn {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 18px;
    padding-top: 2px;
    text-align: center;
    background: #efefef;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .icon-btn.warn {
    background: #ef4f4f;
    color: #fff;
    border-color: #ef4f4f;
  }
  .icon-btn.primary {
    background: #04be02;
    color: #fff;
    border-color: #04be02;
  }
</style>
<script>
  import { XButton, Flexbox, FlexboxItem } from 'vux'
  export default {
    components: {
      XButton,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {
        task: '',
        tasks: [{
          _task: 'This is my first task for learn VueJs. That is Long Long Long.',
          isEdit: false
        }]
      }
    },
    methods: {
      submitTodo () {
        var objTask = {}
        if (this.task) {
          objTask._task = this.task
          objTask.isEdit = false
          this.tasks.push(objTask)
        }
        this.task = ''
      },
      editTask (index) {
        var obj = this.tasks[index]
        if (obj.isEdit) {
          obj.isEdit = false
          obj.task = obj._task
        } else {
          obj.isEdit = true
        }
      },
      removeTask (index) {
        this.tasks.splice(index, 1)
      }
    }
  }
</script>
