<template>
  <div id="todo-list">
    <div class="todo-list-item" v-for="(item, index) in items">
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
</template>
<style>
</style>
<script>
    import { Flexbox, FlexboxItem } from 'vux'
    import { TodoListItem } from './js/TodoListItem.js'
    export default{
      data () {
        return {
        }
      },
      props: TodoListItem.props,
      components: {
        Flexbox,
        FlexboxItem
      },
      methods: {
        editTask: TodoListItem.editTask,
        removeTask: TodoListItem.removeTask
      }
    }
</script>
