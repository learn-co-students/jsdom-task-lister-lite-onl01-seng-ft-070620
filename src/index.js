document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener('submit', (event) => {
    event.preventDefault()
    list = document.getElementById('tasks')
    inputField = document.getElementById("new-task-description")
    task = inputField.value
    taskItem = document.createElement("li")
    taskItem.textContent = task
    list.appendChild(taskItem)

  });
  
});
