document.addEventListener("DOMContentLoaded", () => {
  const newForm = document.getElementById("create-task-form");
  const newDescription = document.getElementById("new-task-description");
  const newUl = document.getElementById("tasks");

  newForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();
  const newDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};