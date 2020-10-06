document.addEventListener("DOMContentLoaded", () => {
  
  function addTask(e) {
    e.preventDefault()
    const newTask = tasks.appendChild(document.createElement('li'))
    newTask.innerHTML = taskText.value
    newTask.appendChild(document.createElement('button'))
    newTask.querySelector('button').innerHTML = 'x'
    e.target.reset()
  }

  function deleteTask(e) {
    e.target.parentElement.remove()
  }
  
  const form = document.querySelector('form')
  const tasks = document.querySelector('#tasks')
  const taskText = document.querySelector('#new-task-description')

  form.addEventListener('submit', function(e) {
    addTask(e)
  })

  tasks.addEventListener('click', function(e) {
    deleteTask(e)
  })

});
