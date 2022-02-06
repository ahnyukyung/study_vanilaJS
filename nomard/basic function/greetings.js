const loginInput = document.querySelector('.login_form input');
const loginForm = document.querySelector('.login_form');
const h1 = document.querySelector('h1');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function loginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const usernameByUser = loginInput.value;

  localStorage.setItem(USERNAME_KEY, usernameByUser);
  paintGreeting(usernameByUser);
}

function paintGreeting(username) {
  // h1.innerText = 'hello ' + username + '~';
  h1.innerText = `hello ${username}~`;
  h1.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', loginSubmit);
} else {
  paintGreeting(savedUsername);
}

// ***********//
// const link = document.querySelector('.naver');

// function linkLinkClick(e) {
//   e.preventDefault();
//   console.dir(e);
// }
// link.addEventListener('click', linkLinkClick);
