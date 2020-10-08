document.addEventListener("DOMContentLoaded", () => {
  let submitBtn = document.querySelector("input[type=submit]")
  submitBtn.addEventListener("click", function(event) {

    // prevent the default request made upon form submission
    event.preventDefault()

    let list = document.querySelector("ul#tasks") // grab the ul
    let task = document.createElement("li") // create a new li
    // grab the user inputted-text
    let text = document.getElementById("new-task-description").value

    task.innerHTML = text // set HTML for the li equal to user's input
    list.appendChild(task) // add the new li element as a child to the ul

  })

})
