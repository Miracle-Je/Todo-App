let input = document.querySelector("#input");
let addTask = document.querySelector("#btn");
let newTask = document.querySelector(".new-task");
let form = document.querySelector("#form");
let edit = document.querySelector("#edit");

addTask.addEventListener("click", (e) => {
  e.preventDefault();
  toDoFunction();
});

function toDoFunction() {
  let newIput = input.value;

  let newEl = document.createElement("div");
  newEl.classList.add("task-container");
  form.appendChild(newEl);

  let newTask = document.createElement("input");
  newTask.setAttribute("readonly", "readonly");
  newTask.value = newIput;
  newTask.classList.add("new-task");
  newEl.appendChild(newTask);
  input.value = "";

  //Adding the check icon
  let check = document.createElement("div");
  check.innerHTML = '<i class="fa-solid fa-square-check fa-lg">';
  newEl.appendChild(check);

  //Adding the trash icon
  let trash = document.createElement("div");
  trash.innerHTML = '<i class="fa-solid fa-trash">';
  newEl.appendChild(trash);

  trash.addEventListener("click", function () {
    newEl.remove();
  });

  //Adding the edit btn
  let editBtn = document.createElement("div");
  editBtn.classList.add("edit");
  editBtn.innerHTML = "Edit";
  newEl.appendChild(editBtn);

  check.addEventListener("click", function () {
    newEl.classList.toggle("checked");
  });

  editBtn.addEventListener("click", function () {
    if (editBtn.innerText.toLowerCase() == "edit") {
      newTask.removeAttribute("readonly");
      newTask.focus();
      editBtn.innerText = "Save";
    } else {
      newTask.setAttribute("readonly", "readonly");
      editBtn.innerText = "Edit";
    }
  });
}
