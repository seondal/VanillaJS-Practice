const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

const superEventHandler = {
  mouseEnter: function () {
    title.style.color = colors[0];
    title.innerText = "Mouse is here!";
  },
  mouseLeave: function () {
    title.style.color = colors[1];
    title.innerText = "Mouse is gone!";
  },
  windowResize: function () {
    title.style.color = colors[2];
    title.innerText = "You just resized!";
  },
  mouseRightClick: function () {
    title.style.color = colors[3];
    title.innerText = "That was a right click!";
  },
};

title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.mouseRightClick);
