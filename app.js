const title = document.getElementById("title");

function handleTitleClick() {
  title.classList.toggle("clicked");
}

title.addEventListener("click", handleTitleClick);
