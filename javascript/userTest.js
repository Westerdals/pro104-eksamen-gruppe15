const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

var log = document.getElementById("login");
var reg = document.getElementById("register");
var togBtn = document.getElementById("btn");

function register() {
  log.style.left = "-400px";
  reg.style.left = "50px";
  togBtn.style.left = "110px";
}

function login() {
  log.style.left = "50px";
  reg.style.left = "450px";
  togBtn.style.left = "0";
}
