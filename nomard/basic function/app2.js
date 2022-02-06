const loginForm = document.querySelector('.login_form');
const loginInput = loginForm.getElementsByTagName('input');
const h1 = document.querySelector('h1');

function loginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  console.log(username);
}
loginForm.addEventListener('submit', loginSubmit);
