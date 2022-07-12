const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const link = document.querySelector("a");

function onLoginBtnClick() {
  const value = loginInput.value;
  console.log(value);
}

function onLinkClick(event) {
  event.preventDefault();
  console.dir(event);
  alert("clicked");
}

loginButton.addEventListener("click", onLoginBtnClick);
link.addEventListener("click", onLinkClick);
