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

const LOCAL_STORAGE_MEMBER_KEY = 'member.list';
const LOCAL_STORAGE_USER_KEY = 'user.list';
let members = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MEMBER_KEY)) || [];
let users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY)) || []; 

// Login
// Checks if the password and username is correct
function loginFormSubmit(event){
  event.preventDefault();
  let name = usernameLogin.value;
  let pass = passwordLogin.value;
  memberLength = members.length;
  console.log("stage1");
  console.log(memberLength);
  for(i = 0; i < memberLength; i++){
    console.log("stage2");
    if (name === members[i].name && pass === members[i].password){
      const userS = setUser(name, pass);
      users.pop();
      users.push(userS);
      saveMember();
      window.location.href = 'index.html';
    } 
  }
}


// Register                                                                                                                                                                                                 
const usernameCreate = document.getElementById("usernameCreate");
const passwordCreate = document.getElementById("passwordCreate");
const passwordCreate2 = document.getElementById("passwordCreate2");

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
    login();
  } else{
    alert("Not matching password!")
  }
}

function createMember(name, password) {
  return { name: name, password: password, image: []};
}

function setUser(name, password) {
  return {name: name, password: password, image: []};
}

function saveMember() {
  localStorage.setItem(LOCAL_STORAGE_MEMBER_KEY, JSON.stringify(members));
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(users));
}

//Show name of user in rightBar.
usernameText = document.getElementById("username");
username.innerHTML = users[0].name;

const buttonAddMember = document.getElementById("buttonAddMember");
const buttonAddMemberHide = document.getElementById("buttonAddMemberHide");
const memberContainer = document.getElementById("memberContainer");

function addMember(event){
  event.preventDefault();
  console.log("open addMember");
  memberContainer.style.display = "block";
  buttonAddMember.style.display = "none";
  buttonAddMemberHide.style.display = "block";
}

function addMemberHide(event){
  event.preventDefault();
  console.log("open addMember");
  memberContainer.style.display = "none";
  buttonAddMember.style.display = "block";
  buttonAddMemberHide.style.display = "none";
}