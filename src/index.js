document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('create-task-form');
    form.addEventListener('submit', addTask);
  });
    
  const addTask = function(event) {
    event.preventDefault();
    const userInput = document.getElementById('new-task-description').value;
    const newTask = document.createElement('li');
    const task = document.getElementById('tasks');
    newTask.innerHTML = userInput;
    task.appendChild(newTask);
  
    const button = document.createElement('button');
    newTask.appendChild(button);
    button.id = userInput;
    button.innerHTML = 'x';
  
    button.addEventListener('click', function(event) {
      event.preventDefault();
      newTask.remove();
    });
  
    event.target.reset();
  };