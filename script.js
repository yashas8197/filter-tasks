const todos = [
  { id: 1, task: 'Task 1', status: 'todo' },
  { id: 2, task: 'Task 2', status: 'completed' },
  { id: 3, task: 'Task 3', status: 'inProgress' },
  { id: 4, task: 'Task 4', status: 'todo' },
  { id: 5, task: 'Task 5', status: 'completed' },
]

const todoList = document.querySelector('#todo-list');
const statusName = document.getElementsByName('status');

function renderList(selectedStatus) {

  const filterStatus = selectedStatus === 'all' ? todos : todos.filter(todo => todo.status === selectedStatus)


  const todoListContainer = filterStatus.map(movie => `
    <li>
      <strong>ID: </strong>${movie.id}<br>
      <strong>Task: </strong>${movie.task}<br>
      <strong>Status: </strong>${movie.status}<br>
      <hr>
    </li>
  `)

  todoList.innerHTML = todoListContainer.join('')
}

renderList('all')

statusName.forEach(status => {
  status.addEventListener('change', function() {
    renderList(this.value)
  })
})

