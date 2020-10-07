document.addEventListener("DOMContentLoaded", () => {
  // your code here
});

let ul = document.querySelector("ul")

document.querySelector("#new-task-submit").addEventListener("click", function(event) {
  let li = document.createElement("li")

  let t = document.querySelector("#new-task-description")
  
  li.innerHTML = t.value

  let b = document.createElement("button")
  b.innerText = "X"

  li.appendChild(b)

  ul.appendChild(li)

  b.addEventListener("click", function(e) {
    li.remove()
  })

  event.preventDefault();
})

