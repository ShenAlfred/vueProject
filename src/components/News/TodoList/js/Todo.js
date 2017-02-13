import config from '../../../../config'

let _task = ''
let _tasks = [{
  _task: 'This is my first task for learn VueJs. That is Long Long Long.',
  isEdit: false
}]

function _submitTodo () {
  this.$http.get(config.baseUrl + '/User', {}).then(function (req) {
    console.log(req)
  }, function (req) {
    console.log(req)
  })
  var objTask = {}
  if (this.task) {
    objTask._task = this.task
    objTask.isEdit = false
    this.tasks.push(objTask)
  }
  this.task = ''
}

export const Todo = {
  task: _task,
  tasks: _tasks,
  submitTodo: _submitTodo
}
