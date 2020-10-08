document.addEventListener("DOMContentLoaded", () => {
  let submitBtn = document.querySelector("input[type=submit]")
  submitBtn.addEventListener("click", function(event) {

    // create an li element with the user-inputted text
    let task = document.createElement("li")
    let text = document.getElementById("new-task-description").value
    task.innerHTML = text

    // add the new li element as a child to the ul
    let list = document.querySelector("ul#tasks")
    list.appendChild(task)

    // prevent the default request made upon form submission
    event.preventDefault()
  })

})
