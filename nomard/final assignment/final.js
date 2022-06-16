// background
const wrap = document.querySelector("#wrap");
const btnBg = wrap.querySelector(".btn_random");
function changeBg() {
  const backGround = ["bg_0.jpg", "bg_1.jpg", "bg_2.jpg", "bg_3.jpg", "bg_4.jpg", "bg_5.jpg"];
  const randomNumber = Math.floor(Math.random() * 6);
  wrap.style.backgroundImage = `url(assets/images/${backGround[randomNumber]})`;
}
changeBg();
btnBg.addEventListener("click", changeBg);

// lottie
const lottieAnimation = bodymovin.loadAnimation({
  container: $("#lottie")[0],
  path: "https://assets7.lottiefiles.com/packages/lf20_9aq9An.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});

// clock
const clock = document.querySelector("#clock");

function realtime() {
  const date = new Date();
  const nowHours = String(date.getHours()).padStart(2, 0);
  const nowMinutes = String(date.getMinutes()).padStart(2, 0);
  const nowSeconds = String(date.getSeconds()).padStart(2, 0);
  const now = `${nowHours}:${nowMinutes}:${nowSeconds}`;
  clock.innerText = now;
}
realtime();
setInterval(realtime, 1000);

// login
const loginInput = document.querySelector(".login_form input");
const loginForm = document.querySelector(".login_form");
const h2 = document.querySelector("h2");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernameByUser = loginInput.value;

  localStorage.setItem(USERNAME_KEY, usernameByUser);
  paintGreeting(usernameByUser);
}

function paintGreeting(username) {
  h2.innerText = `Welcome ${username}  :-)`;
  h2.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreeting(savedUsername);
}

// todoList
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

// weather
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const API_KEY = "a62d2936ac06ca7a0d5881335e6d2746";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //   console.log("you live", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      //   console.log(data.name, data.weather[0].main, data.weather[0].description, data.main.temp);
      const weather = document.querySelector("#weather .location span");
      const city = document.querySelector("#weather .weather span");
      weather.innerText = `${data.name}`;
      city.innerText = `${data.weather[0].main}  ${data.main.temp} ℃ `;
    });
}
function onGeoError() {
  alert("can't find your location");
}

// quote
const quotes = [
  {
    quote: "When life gives you lemons, make lemonade",
    author: "Elbert Hubbard",
  },
  {
    quote: "The world is your oyster. It's up to yo to find the pears.",
    author: "Chris Gardner",
  },
  {
    quote: "The fastest way to change yourself is to hang out with people who are already the way you want to be",
    author: "REid Hoffman",
  },
  {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.",
    author: "Bill Keane",
  },
  {
    quote: "사람을 낙원으로 삼지 마라",
    author: "anonymous",
  },
  {
    quote: "좋았다면 추억이고, 나빴다면 경험이다.",
    author: "anonymous",
  },
  {
    quote: "그냥, 가. 보. 자. 고.",
    author: "anonymous",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// console.log(todaysQuote);
quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;

function showQuote() {
  console.log(document.querySelector("#quote .text"));
  document.querySelector("#quote .text").classList.add("show");
  document.querySelector("#quote .author").classList.add("show");
}
showQuote();
