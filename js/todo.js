const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const list = document.getElementById("list");

const todoDay = document.querySelector("#todo-day");
const todoDate = document.querySelector("#todo-date");

function getToday() {
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  todoDay.innerText = week[today.getDay()];
  const monthName = today.toLocaleString("en-US", { month: "long" });
  todoDate.innerText = `${monthName} ${today.getDate()}, ${today.getFullYear()}`
}
getToday();


let todo = [];
const TODO_KEY = "todo";

function saveTodo() {
  localStorage.setItem(TODO_KEY, JSON.stringify(todo));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todo = todo.filter((Do) => Do.id !== parseInt(li.id));
  saveTodo();
}

function addLine(event) {
  const li = event.target.parentElement;
  const check = event.target;
  if (check.checked) {
    li.style.textDecoration = "line-through";
  } else {
    li.style.textDecoration = "none";
  }
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const input = document.createElement("input");  // checkbox
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "todo-check");
  input.addEventListener("click", addLine);
  const span = document.createElement("span");  // todo title
  span.innerText = newTodo.text;
  const button = document.createElement("button");  // todo remove button
  button.innerText = "remove";
  button.addEventListener("click", deleteTodo);
  li.appendChild(input);
  li.appendChild(span);   //li의 자식으로 span을 넣는다.
  li.appendChild(button);
  list.appendChild(li);

}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todo.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodo = localStorage.getItem(TODO_KEY);

if (savedTodo !== null) {
  const parsedTodo = JSON.parse(savedTodo);
  todo = parsedTodo;
  parsedTodo.forEach(paintTodo);
}