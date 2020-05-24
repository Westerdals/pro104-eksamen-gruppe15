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

const log = document.getElementById("login");
const reg = document.getElementById("register");
const togBtn = document.getElementById("btnUser");
const editImg = document.getElementById("editImgBtn");

function register() {
  log.style.display = "none";
  reg.style.display = "block";
  togBtn.style.left = "102px";
  editImg.style.display = "block";
}

function login() {
  log.style.display = "block";
  reg.style.display = "none";
  togBtn.style.left = "0";
  editImg.style.display = "none";
}

// Local Storage + login check

