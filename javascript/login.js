//  Animations and events for login screen
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

// Function that takes you to the register page.
function register() {
  log.style.display = "none";
  reg.style.display = "block";
  togBtn.style.left = "102px";
  editImg.style.display = "block";
}

// Function that takes you to the login page.
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

// Local storage keys for members and user
const LOCAL_STORAGE_MEMBER_KEY = "member.list";
const LOCAL_STORAGE_USER_KEY = "user.list";
let members = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MEMBER_KEY)) || [];
let users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_KEY)) || [];

// Our users on the  site
/*
gruppe15();
function gruppe15(){
  let count = members.length;
  for(i = 0; i < count; i++){
    if(members[0].name != "solsnov"){
      const idun = createMember("solsnov", "bengterbest", "https://www.google.com/search?q=hamburger&tbm=isch&hl=sv&hl=sv&tbs=ic%3Atrans%2Cisz%3Ai&ved=0CAIQpwVqFwoTCPj-yuzUz-kCFQAAAAAdAAAAABAC&biw=1903&bih=937#imgrc=6X8BQNbfp2KYgM");
      members.push(idun);
      saveMember();
    }
  }
}
*/

// Login
// Checks if the password and username is correct.
// Pops user, changes the user data from the previous user.
// Takes the user info from the members array, it can only be set if the name and password is equal to a member.
function loginFormSubmit(event) {
  event.preventDefault();
  let name = usernameLogin.value;
  let pass = passwordLogin.value;
  memberLength = members.length;
  for (i = 0; i < memberLength; i++) {
    if (name === members[i].name && pass === members[i].password) {
      const userS = setUser(name, pass);
      users.pop();
      users.push(userS);
      saveMember();
      window.location.href = "tabs.html";
    }
  }
}

// Register.
const usernameCreate = document.getElementById("usernameCreate");
const passwordCreate = document.getElementById("passwordCreate");
const passwordCreate2 = document.getElementById("passwordCreate2");

// Creates a new member in the members array, then calls login() to be take bak to the login page. 
function createFormSubmit(event) {
  event.preventDefault();
  name = usernameCreate.value;
  pass = passwordCreate.value;
  pass2 = passwordCreate2.value;
  if (pass === pass2) {
    const member = createMember(name, pass);
    members.push(member);
    saveMember();
    login();
  } else {
    alert("Not matching password!");
  }
}
// Object for members.
function createMember(name, password) {
  return { name: name, password: password, image: ["/images/userLogo.png"] };
}
// Object for users.
function setUser(name, password) {
  return { name: name, password: password, image: [""] };
}
// Saves new members/users changes.
function saveMember() {
  localStorage.setItem(LOCAL_STORAGE_MEMBER_KEY, JSON.stringify(members));
  localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(users));
}
