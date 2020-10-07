document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener('submit', function (e) {
    e.preventDefault();
    let list = document.getElementById('tasks');
    let description = document.getElementById('new-task-description').value;
    let task = document.createElement('li');
    task.innerHTML = description;
    list.appendChild(task);
  });
});