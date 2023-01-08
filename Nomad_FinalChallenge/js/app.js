const nameLogin = document.querySelector("#name-login");
const loginInput = document.querySelector("#name-login input");
const greeting = document.querySelector("#greeting");

const A = "hidden";
const B = "username";

function handleLogin(event) {
  event.preventDefault();
  nameLogin.classList.add(A);
  const username = loginInput.value;
  localStorage.setItem(B, username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(A);
};



const savedUsername = localStorage.getItem(B);

if (savedUsername === null) {
nameLogin.classList.remove(A);
nameLogin.addEventListener("submit", handleLogin);
} else {
  greeting.innerText = `Welcome Back ${savedUsername}`;
  greeting.classList.remove(A);
};