const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

let todoList = document.querySelector("ul#todo-list");
let todoItem;

// List out each to do items in teh tasks array.
for (let i = 0; i < tasks.length; i++) {
  todoItem = document.createElement("li");
  todoItem.innerHTML = tasks[i];
  console.log(todoItem.innerHTML);
  todoList.appendChild(todoItem);
}

// Click a "done" todo item to add strike-through.
// Click again to remove strike-through.
todoList.addEventListener("click", function(event) {
  event.target.classList.toggle("done");
});

// Insert a new to do item in todo list by clicking "Add Todo" button.
let addTodoButton = document.querySelector("button");
addTodoButton.addEventListener("click", function() {
  AddTodoItem();
});

// Insert a new to do item in todo list by pressing enter in input box.
let addTodoInputField = document.querySelector("input");
addTodoInputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    AddTodoItem();
  }
});

// Function for adding new todo item to todo list.
function AddTodoItem() {
  todoItem = document.createElement("li");
  todoItem.innerHTML = document.querySelector("input").value;
  todoList.appendChild(todoItem);
  return console.log(todoItem.innerHTML);
}
