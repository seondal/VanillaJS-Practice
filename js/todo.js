const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TO_DO_S = "todos";
let todos = [];
const savedTodos = localStorage.getItem(TO_DO_S);
if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  todos.forEach(paintTodo);
}

function saveTodos() {
  localStorage.setItem(TO_DO_S, JSON.stringify(todos));
}

todoForm.addEventListener("submit", addTodo);

function addTodo(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  saveTodos();

  paintTodo(newTodoObj);
}

function paintTodo(newTodoObj) {
  const todoLi = document.createElement("li");
  const todoSpan = document.createElement("span");

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.addEventListener("click", deleteTodo);

  todoLi.id = newTodoObj.id;
  todoLi.appendChild(todoSpan);
  todoLi.appendChild(deleteBtn);

  todoSpan.innerText = newTodoObj.text;
  todoList.appendChild(todoLi);
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  todos = todos.filter((item) => item.id !== parseInt(li.id));
  li.remove();
}
