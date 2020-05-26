// Show name of user in rightBar.
usernameText = document.getElementById("username");
username.innerHTML = users[0].name;

const buttonAddMember = document.getElementById("buttonAddMember");
const buttonAddMemberHide = document.getElementById("buttonAddMemberHide");
const memberContainer = document.getElementById("memberContainer");
const memberListDropdown = document.getElementById("memberListDropdown");
const memberIconContainer = document.getElementById("memberIconContainer");

// Opens the member list in the project header. 
function addMember(event){
  event.preventDefault();
  memberContainer.style.display = "block";
  buttonAddMember.style.display = "none";
  buttonAddMemberHide.style.display = "block";
}

// Closes the member list in the project header.
function addMemberHide(event){
  event.preventDefault();
  memberContainer.style.display = "none";
  buttonAddMember.style.display = "block";
  buttonAddMemberHide.style.display = "none";
}


// Adds all members to the tasks array from the login array, repeats every array except the display object, since we down want this value to be deleted. 
function addAllMembers(){
    const selectedList = lists.find((list) => list.id === selectedListId);
    let count = members.length;

    for(i = 0; i < count; i++){
        selectedList.members.name = [];
        selectedList.members.image = [];
        save();
    }

    for(i = 0; i < count; i++){
        selectedList.members.name.push(members[i].name);
        selectedList.members.image.push(members[i].image);
        save();
    }

    // Sets display none in the function renderProjectMembers, 
    //the if statement is to prevent the added members on projects to disapear when you create a new user. 
    for(i = 0; i < count; i++){
        if(selectedList.members.display.length < selectedList.members.name.length){
            selectedList.members.display.push("none");
            save();
        }
    }
}

renderMemberList();
// Renders all members in the members array with template literals. 
function renderMemberList() {
  const selectedList = lists.find((list) => list.id === selectedListId);
  clearElement(memberListDropdown);
  memberCount = members.length;
  for(i = 0; i < memberCount; i++){
    let memberDiv = document.createElement('div');
    let currentName = members[i].name;
    memberDiv.innerHTML = 
    `
    <div class="memberBoxList">
      <div class="memberAvatar" style="background-image: url(${members[i].image});"></div>
      <p class="memberUsername">${currentName}</p>
      <div class="addThisMember" id="${i}" onclick="addThisMember(event, this.id)"><p class="AddTextThisMember">Add</p></div>
    </div>
    `
    memberListDropdown.appendChild(memberDiv);
  }
}

const changeImageFormContainer = document.getElementById("changeImageFormContainer");

// changes the form where we add the image url from none to block, the value is changed back to none inside hover.js.
function newUserImage(event){
    event.preventDefault();
    changeImageFormContainer.style.display = "block";
}
setUserImageLogin();
// Changes the profile picture on rightBar to the current value in the users array for image.
function setUserImageLogin(){
    let memberCount = members.length;
    for(i = 0; i < memberCount; i++){
        if (members[i].name === users[0].name){
            users[0].image = members[i].image;
            saveMember();
        }
    }
    let profilePicture = document.getElementById("profilePicture");
    profilePicture.style.backgroundImage = "url(" + users[0].image + ")";
}

// Changes the default image url for the user, and also passes the value to the correct member array.
function newUserLink(event){
    event.preventDefault();
    let newImageInput = document.getElementById("newImageInput");
    let urlValue = newImageInput.value;
    let memberCount = members.length;
    for(i = 0; i < memberCount; i++){
        if (members[i].name === users[0].name){
            members[i].image.splice(0, 1, urlValue);
            users[0].image.splice(0, 1, urlValue);
            saveMember();
            setUserImageLogin();
            renderMemberList();
        }
    }
    renderProjectMembers();
}

function loginPage(event){
    event.preventDefault();
    window.location.href = 'index.html';
}

// Gives selectedList.members.display the value of block, so it can be passed on in the renderProjectMembers() function. 
function addThisMember(event, currentId){
    event.preventDefault();
    const selectedList = lists.find((list) => list.id === selectedListId);
    let count = members.length;
    currentMember = parseInt(currentId);

    for(i = 0; i < count; i++){
        if(i === currentMember){
        selectedList.members.display.splice(i, 1, "block");
        save();
        renderProjectMembers();
        }
    }
    addAllMembers();
    renderProjectMembers();
}

// Renders added members for projects
renderProjectMembers();
function renderProjectMembers(){
    const selectedList = lists.find((list) => list.id === selectedListId);
    clearElement(memberIconContainer);
    count = selectedList.members.image.length;
    for(i = 0; i < count; i++){
        let createDiv = document.createElement('div');
        let currentImage = selectedList.members.image[i];
        let currentName = selectedList.members.name[i];
        let currentStyle = selectedList.members.display[i];
        createDiv.innerHTML = 
        `
            <div class="ProjectMembers" id="${"memberImage" + i}" style="background-image: url(${currentImage}); display: ${currentStyle};" title="${currentName}"></div>
        `
        let styleMember = document.getElementById("memberImage" + i);
        memberIconContainer.appendChild(createDiv);
    }
}

// Renders all members from the members local storage array and shows them in the selectSubMemberContainer div. 
function renderSubTaskMemberAddList(){
    let selectSubMemberContainer = document.getElementById("selectSubMemberContainer");
    clearElement(selectSubMemberContainer);
    const selectedList = lists.find((list) => list.id === selectedListId);
    memberCount = members.length;
    for(i = 0; i < memberCount; i++){
        let memberDiv = document.createElement('div');
        let currentName = members[i].name;
        memberDiv.innerHTML = 
    `
    <div class="subProfileAddContainer">
        <div class="subProfilePictureAdd" style="background-image: url(${members[i].image});"></div>
        <p class="subTaskTextAdd">${currentName}</p>
        <button class="addSubMemberButton" id="${i}" onclick="addMemberToSubList(event, this.id)">+</button>
    </div>
    `
    selectSubMemberContainer.appendChild(memberDiv);
  }
}
