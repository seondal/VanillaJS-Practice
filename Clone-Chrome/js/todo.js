const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", handleTodoSubmit);

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}

function paintTodo(newTodo) {
  const todoLi = document.createElement("li");
  const todoSpan = document.createElement("span");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteTodo);

  todoLi.appendChild(todoSpan);
  todoLi.appendChild(deleteBtn);

  todoSpan.innerText = newTodo;
  todoList.appendChild(todoLi);
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
}
