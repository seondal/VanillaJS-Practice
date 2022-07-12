const background = document.body;

function handleResized() {
  const mobile = "mobile";
  if (window.innerWidth <= 340) {
    background.classList.add(mobile);
  } else {
    background.classList.remove(mobile);
  }
}

window.addEventListener("resize", handleResized);
