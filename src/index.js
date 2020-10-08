
let taskForm = document.getElementById("create-task-form") // collects the entire form
let taskShowUl = document.getElementById("tasks"); // show spot for the new Task


taskForm.addEventListener("submit", addTaskFunction);

function addTaskFunction(event) {
  event.preventDefault()
  let taskText = event.target.children[1].value
  updateTaskShow(taskText)
  event.target.reset()
}

function updateTaskShow(taskText) {
  let li = document.createElement('li')
  li.innerHTML = taskText
  taskShowUl.appendChild(li)
}
