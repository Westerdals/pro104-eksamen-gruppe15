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

// Members array Local-Storage
// pushMember();

// const LOCAL_STORAGE_MEMBER_KEY = 'memb.members';

// let members = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MEMBER_KEY)) || [];

// function pushMember(){
//   const memberName = "Max";
//   const memb = createMember(memberName);
//   members.push(memb);
//   saveMember();
//   console.log("pushMember");
// }

// function createMember(name){
//   return {id: Date.now().toString(), memberName: memberName, password: [], image: []};
// }

// function saveMember(){
//   localStorage.setItem(LOCAL_STORAGE_MEMBER_KEY, JSON.stringify(members));
// }

// const listName = newListInput.value;
//     if (listName == null || listName === '') return;
//     const list = createList(listName);
//     newListInput.value = null;
//     lists.push(list);