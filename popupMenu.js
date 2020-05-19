var popup = document.getElementById("popupMain");

function openMenu() {
  popup.style.display = "block";
}

function closeMenu() {
  popup.style.display = "none";
}

var toDo = document.getElementById("statusTodo");
var doing = document.getElementById("statusDoing");
var feedback = document.getElementById("statusFeedback");
var done = document.getElementById("statusDone");
var suList = document.getElementById("subList");

function changeColor() {
  subList.style.backgroundColor = "#ffffff";
}

function changeColor2() {
  subList.style.backgroundColor = "#f4b707";
}

function changeColor3() {
  subList.style.backgroundColor = "#4184c6";
}

function changeColor4() {
  subList.style.backgroundColor = "#5ec19d";
}
