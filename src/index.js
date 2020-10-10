document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form input:nth-of-type(2)").addEventListener("click", function(event) {
    const form = document.getElementById("create-task-form")
    const ul = document.querySelector("ul");
    const li = ul.appendChild(document.createElement("li"));
    const text = document.querySelector("#new-task-description").value;

    li.innerText = text
    
    // const trash = document.createElement("button")
    // trash.value = "delete"
    // trash.innerText = "x"
    // li.appendChild("trash")
    
    form.reset()
    event.preventDefault();
  }, false);


});


// query select input
// add event listener taking input text on submit on form element
  // prevent default of submit. reload page instead of redirecting
// change innerText of task to input
