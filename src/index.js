let form = document.getElementById('create-task-form');
let li = document.createElement('li');

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener('submit', function(event) {
    let userInput = document.getElementById('new-task-description').value;
    document.getElementById('tasks').innerHTML += `<li>${userInput}</li>`
    event.preventDefault();
    form.reset();
  }
  );
});