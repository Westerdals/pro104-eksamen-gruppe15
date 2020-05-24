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

// Form
const loginForm = document.getElementById("loginForm");

// name input
const usernameLogin = document.getElementById("usernameLogin");

// password input
const passwordLogin = document.getElementById("passwordLogin");

// Login
// Checks if the password and username is correct
function loginFormSubmit(event){
  event.preventDefault();
  let testUsername = "macke";
  let testPassword = "123";
  let name = usernameLogin.value;
  let pass = passwordLogin.value;
  memberLength = members.length;
  console.log(memberLength);
  for(i = 0; i < memberLength; i++){
    if (name === members[i].name && pass === members[i].password){
      console.log("you logged inn");
      window.location.href = 'index.html';
    }
  }
}


// Register
const usernameCreate = document.getElementById("usernameCreate");
const passwordCreate = document.getElementById("passwordCreate");
const passwordCreate2 = document.getElementById("passwordCreate2");

const LOCAL_STORAGE_MEMBER_KEY = 'user.list';
let members = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MEMBER_KEY)) || [];

function createFormSubmit(event){
  event.preventDefault();
  console.log("stage1");
  name = usernameCreate.value;
  pass = passwordCreate.value;
  pass2 = passwordCreate2.value;
  console.log(name);
  if (pass === pass2){
    const member = createMember(name, pass);
    members.push(member);
    saveMember();
  } else{
    alert("Not matching password!")
  }
}

function createMember(name, password) {
  return { name: name, password: password, image: []}
}

function saveMember() {
  localStorage.setItem(LOCAL_STORAGE_MEMBER_KEY, JSON.stringify(members));
}

