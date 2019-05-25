const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];
const inputPrompt = "What's next?";

const todoList = document.querySelector("ul#todo-list");
const addTodoInputField = document.querySelector("input");
const addTodoButton = document.querySelector("button");
const removeTodoButton = '<button class="remove" type="button">Remove</button>';

/*************************************
 INITIATION
 1. Preload the to do items
 ************************************/
for (let i = 0; i < tasks.length; i++) {
  let htmlContent = tasks[i] + removeTodoButton;
  console.log(htmlContent);
  AddTodoItem(htmlContent);
}
addTodoInputField.value = inputPrompt;

/*************************************
 TODO ITEM FUNCTIONALITIES
 1. User can click on todo time to add strike-through, indicating it's done.
 2. Clicks the done todo item to remove strike-through, making it a todo again.
 3. User can remove the todo item from the screen by click "Remove" button.
 ************************************/

todoList.addEventListener("click", function(event) {
  event.target.tagName === "BUTTON"
    ? todoList.removeChild(event.target.parentNode)
    : event.target.classList.toggle("done");
});

/*************************************
 INPUT FIELD FUNCTIONALITIES
 1. Input field default value is What's next? to prompt user to input todo.
 2. When user click the input field, clear "what's next?" for user input.
 3. If user doesn't input anything and clicks other things, show "What's next?" again.
 4. If user input some text in the input field and clicks other things, retain user input.
 5. When user hits enter and there is text in input field, add user input todo list.
 6. User can also use the "Add To Do" button to add todo item to todo list.
 ************************************/

addTodoInputField.addEventListener("focus", event => {
  if (event.target.value === inputPrompt) event.target.value = "";
});

addTodoInputField.addEventListener("blur", event => {
  if (event.target.value === "") event.target.value = inputPrompt;
});

addTodoInputField.addEventListener("keypress", event => {
  if (event.key === "Enter") {
    let htmlContent = addTodoInputField.value + removeTodoButton;
    AddTodoItem(htmlContent);
    addTodoInputField.value = "";
  }
});

// Insert a new to do item in todo list by clicking "Add Todo" button.
addTodoButton.addEventListener("click", () => {
  let htmlContent = addTodoInputField.value + removeTodoButton;
  AddTodoItem(htmlContent);
  addTodoInputField.value = inputPrompt;
});

// Function for adding new todo item to todo list.
function AddTodoItem(htmlContent) {
  if (addTodoInputField.value && addTodoInputField.value !== inputPrompt) {
    let todoItem = document.createElement("li");
    todoItem.innerHTML = htmlContent;
    todoList.appendChild(todoItem);
  }
}
