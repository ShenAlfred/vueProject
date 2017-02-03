let _props = ['items']

function _editTask (index) {
  var obj = this.items[index]
  if (obj.isEdit) {
    obj.isEdit = false
    obj.task = obj._task
  } else {
    obj.isEdit = true
  }
}

function _removeTask (index) {
  this.items.splice(index, 1)
}

export const TodoListItem = {
  props: _props,
  editTask: _editTask,
  removeTask: _removeTask
}
