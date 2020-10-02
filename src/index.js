
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', addTask);
});
  
const addTask = function(event) {
  event.preventDefault();
  const task = document.getElementById('tasks');
  const userInput = document.getElementById('new-task-description').value;
  const newTask = document.createElement('li');
  newTask.innerHTML = userInput;
  task.appendChild(newTask);
  event.target.reset();
};