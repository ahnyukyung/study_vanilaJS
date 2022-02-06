const toDoForm = document.getElementById("todoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todoList");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  // console.log(li.id);

  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  li.appendChild(span).innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteTodo);

  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  //   console.log(toDoInput.value);
  toDoInput.value = "";
  //   console.log(newTodo, toDoInput.value);
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//   console.log('hello', item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // console.log(parsedToDos);
  // parsedToDos.forEach((item) => console.log('hello', item));
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}

function sezyFilter() {}
[1, 2, 3, 4].fill(sezyFilter);

// const arr = [1234, 4535, 45, 62, 5656, 234, 678];
// function sexy(potato) {
//   return potato <= 1000;
// }
// arr.filter(sexy)(4)[(45, 62, 234, 678)];
