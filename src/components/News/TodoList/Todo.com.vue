<template>
  <div>
    <div id="todo-list-search">
      <flexbox>
        <div class="percent80">
          <input type="text" v-model="task" placeholder="please input todo task!">
        </div>
        <flexbox-item>
          <x-button @click.native="submitTodo">todo</x-button>
        </flexbox-item>
      </flexbox>
    </div>
    <todo-list-item v-bind:items=tasks></todo-list-item>
  </div>
</template>
<style></style>
<script>
  import { XButton, Flexbox, FlexboxItem } from 'vux'
  import TodoListItem from './TodoListItem.com.vue'
  import { Todo } from './js/Todo.js'
  export default {
    components: {
      XButton,
      Flexbox,
      FlexboxItem,
      TodoListItem
    },
    data () {
      return {
        task: Todo.task,
        tasks: Todo.tasks
      }
    },
    methods: {
      submitTodo: Todo.submitTodo
    }
  }
</script>
