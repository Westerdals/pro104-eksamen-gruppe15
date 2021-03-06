let popup = document.getElementsByClassName("popUpContainer");

// Calls render functions
changeColorheader();
changeListStatus();

// Opens the pop-up-menu where you can edit tasks. 
// Renders all content every time you press the edit icon on the sub-tasks with template literals. 
function openMenu(event, editId) {

  event.preventDefault();
  popup[0].style.display = "block";
  document.getElementById("popUpContainer").style.display = "block";
  popup[0].innerHTML = "";
  let popupContent = document.createElement('div');
  popupContent.innerHTML = 
    ` 
    <div id="listName"></div>
    <div id="editTaskListContainer"></div>

    <div id="selectStatus">
      <div> 
        <p id="selectTxt">Select status on list</p>
        <div id="${editId}"class="blackStatus" onclick="changeColor(event, this.id)" title="To do">
            <p class="statusP">To do</p>
        </div>
        <div id="${editId}" class="yellowStatus" onclick="changeColor2(event, this.id)" title="In progress">
            <p class="statusP">In progress</p>
        </div>
        <div id="${editId}" class="blueStatus" onclick="changeColor3(event, this.id)" title="Waiting for feedback">
            <p class="statusP">Waiting for feedback</p>
        </div>
        <div id="${editId}" class="greenStatus" onclick="changeColor4(event, this.id)" title="Done">
            <p class="statusP">Done</p>
        </div>
      </div>
    </div>
    
    <div class="deadlineInputContainer"><p id="deadlineTxt">Set a deadline for the list</p>
    <form  onsubmit="singleTaskSetDate(event, this.id)" id="${editId}">
        <input type="number" class="deadlineInput" id="dayInput" placeholder="DD" min="1" max="31" title="Day">
        <input type="number" class="deadlineInput" id="monthInput" placeholder="MM" min="1" max="12" title="Month">
        <input type="number" class="deadlineInput" id="yearInput" placeholder="YY" min="2020" title="Year">
        <button class="addButton" title="Add deadline">+</button>
    </form>
    </div>
    <div class="memberInputContainer">
      <button id="memberSubTaskOpen" onclick="showSubMemberList(event)">Add Member</button>
      <button id="memberSubTaskClose" onclick="hideSubMemberList(event)">Hide Member</button> 
      <div id="selectSubMemberContainer">

      </div>
      <div id="renderSubMemberContainer">

      </div>
    </div>
    <p id="backBtn" title="Close" onclick="closeMenu()"></p>
    <p class="currentTaskCount">To do list ${parseInt(editId) + 1}</p>
  `
    
  popup[0].appendChild(popupContent);
  popup[0].id = editId;
  // Renders all the missing pieces in the pop-up-menu
  styleDragabbleHeader();
  renderSingleTask();
  renderSingleHeader();
  renderDeadline();
}

// Gives the div where you add subMembers style block inside the pop-up-window
function showSubMemberList(event){
  let selectSubMemberContainer = document.getElementById("selectSubMemberContainer");
  let memberSubTaskOpen = document.getElementById("memberSubTaskOpen");
  let memberSubTaskClose = document.getElementById("memberSubTaskClose");
  event.preventDefault();
  selectSubMemberContainer.style.display = "block";
  memberSubTaskOpen.style.display = "none";
  memberSubTaskClose.style.display = "block";
  renderSubTaskMemberAddList();
}

// Gives the div where you add subMembers style none inside the pop-up-window
function hideSubMemberList(event){
  let selectSubMemberContainer = document.getElementById("selectSubMemberContainer");
  let memberSubTaskOpen = document.getElementById("memberSubTaskOpen");
  let memberSubTaskClose = document.getElementById("memberSubTaskClose");
  event.preventDefault();
  selectSubMemberContainer.style.display = "none";
  memberSubTaskClose.style.display = "none";
  memberSubTaskOpen.style.display = "block";
}

//Funksjon for at style draggebleHeader når openMenu() blir kjørt
function styleDragabbleHeader(){
  var draggableHeader = document.getElementById("draggableHeader");
  draggableHeader.style.display = "block";
  draggableHeader.style.position = "absolute";
  draggableHeader.style.width = "700px";
  draggableHeader.style.height = "45px";
  draggableHeader.style.top = "-38px";
  draggableHeader.style.backgroundColor = "#424249";
  draggableHeader.style.borderRadius = "5px";
  draggableHeader.style.boxShadow = "0px 0px 17px -3px rgba(0,0,0,0.5)";

}

//Funksjon for at popUp vindu og draggebleHeader ikke skal vises når man lukker vinduet
function closeMenu() {
  popup[0].style.display = "none";
  document.getElementById("draggableHeader").style.display = "none";
  document.getElementById("popUpContainer").style.display = "none";
}

// Pushes blue #808080 (gray) to local storage (subTasksStatus)
function changeColor(event, currentTask) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  console.log("gray");
  currentTaskNumber = document.getElementById(currentTask).id;
  //selectedList.tasksSub.subTasksStatus[currentTaskNumber].splice(0, 1, "#f4b707");
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].pop();
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].push("#808080");
  save();
  changeColorheader();
}

// Pushes blue #F2AF5C (yellow) to local storage (subTasksStatus)
function changeColor2(event, currentTask) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  console.log("Yellow");
  currentTaskNumber = document.getElementById(currentTask).id;
  //selectedList.tasksSub.subTasksStatus[currentTaskNumber].splice(0, 1, "#f4b707");
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].pop();
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].push("#F2AF5C");
  save();
  changeColorheader();
}

// Pushes blue #57C6F2 (waiting for feedback) to local storage (subTasksStatus)
function changeColor3(event, currentTask) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  console.log("blue");
  currentTaskNumber = document.getElementById(currentTask).id;
  //selectedList.tasksSub.subTasksStatus[currentTaskNumber].splice(0, 1, "#f4b707");
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].pop();
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].push("#57C6F2");
  save();
  changeColorheader();
}

// Pushes green #24BF86 (done) to local storage (subTasksStatus)
function changeColor4(event, currentTask) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  console.log("green");
  currentTaskNumber = document.getElementById(currentTask).id;
  //selectedList.tasksSub.subTasksStatus[currentTaskNumber].splice(0, 1, "#f4b707");
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].pop();
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].push("#24BF86");
  save();
  changeColorheader();
}

//lists.find((list) => list.id === selectedListId);

// Changes the current color on to-to-list header to the value in local storage. 
function changeColorheader(){
  const selectedList = lists.find((list) => list.id === selectedListId);
  taskCount = selectedList.tasksSub.subTasksStatus.length;
  for(i = 0; i < taskCount; i++){
    currentForm = document.getElementById("form" + i);
    currentColor = selectedList.tasksSub.subTasksStatus[i];
    currentForm.style.backgroundColor = currentColor;
  }
}

// Renders all tasks in the to-do-list that you click
function renderSingleTask(){
  const selectedList = lists.find((list) => list.id === selectedListId);
  let singleEditContainer = document.getElementById("editTaskListContainer");
  clearElement(singleEditContainer);
  let listLength = selectedList.tasksSub.subTasksList.length;
  for(i = 0; i < listLength; i++){
    let currentId = parseInt(popup[0].id);
    if(currentId === i){
      t=0;
      selectedList.tasksSub.subTasksList[i].forEach((list) => {
        divElement = document.createElement('div');
        divElement.innerHTML = 
        `
        <div class="singleTaskBorderStyle">
        <div class="singleStatus" id="${t}" onclick="editSingleStatus(event, this.id)" title="Done"></div>
        <div class="singleDelete" id="${t}" onclick="deleteSingleTask(event, this.id)" title="Delete"></div>
        <p class="singleTaskCount">${"Task " + (t + 1)}</p>
          <form action="" id=${"singleForm" + t} class="singleForm" onsubmit="editSingleTask(event, this.id)">
            <input type="text" placeholder="${list}" id="${"singleInput" + t}" 
            value="${list}" class="singleInputStyle" style="width: 364px; " title="Edit task"></input>
            <button class="singleEdit" title="Edit/Undo"></button>
          </form>
        </div>
        <br>
        `
        singleEditContainer.appendChild(divElement);
        t++;
      })
    }
  }

}

// Deletes a task from the local storage array. 
function deleteSingleTask(event, deleteId) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  let listLength = selectedList.tasksSub.subTasksList.length; 
  for(i = 0; i < listLength; i++){
    let currentId = parseInt(popup[0].id);
    if(currentId === i){
        t=0;
      selectedList.tasksSub.subTasksList[i].forEach((list) => {
        if(parseInt(deleteId) === t){
          selectedList.tasksSub.subTasksList[i].splice(t, 1);
          selectedList.tasksSub.subTasksLiStatus[i].splice(t, 1);
          save();
        }
        t++;
      })
    }
  }
  subTaskRender();
  renderSingleTask();
  changeListStatus();
}

// Edits the text value inside the local storage array for tasks. 
function editSingleTask(event, editId){
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  let listLength = selectedList.tasksSub.subTasksList.length;
  for(i = 0; i < listLength; i++){
    let currentId = parseInt(popup[0].id);
    if(currentId === i){
      t=0;
      selectedList.tasksSub.subTasksList[i].forEach((list) => {
        if(editId === "singleForm" + t){
          newValue = document.getElementById("singleInput" + t).value;
          selectedList.tasksSub.subTasksList[i].splice(t, 1, newValue);
          selectedList.tasksSub.subTasksLiStatus[i].splice(t, 1, "none");
          save();
        }
        t++;
      })
    }
  }
  subTaskRender();
  renderSingleTask();
  changeListStatus();
}


// Renders the header name inside the pop-up-menu.
function renderSingleHeader(){
  const selectedList = lists.find((list) => list.id === selectedListId);
  let listLength = selectedList.tasksSub.subTasksList.length;
  let listName = document.getElementById("listName");
  clearElement(listName);
    
  for(i = 0; i < listLength; i++){
    let currentId = parseInt(popup[0].id);
      if(currentId === i){
        divElement = document.createElement('div');
        divElement.innerHTML = 
        `
          <p class="currentSingleHeader">${selectedList.tasksSub.subTasksHeader[i]}</p>
        `
        listName.appendChild(divElement);
      }
  }
}

// Loops through all tasks and gives them the textDecorationLine value from local storage in the subTasksLiStatus.
function changeListStatus(){
  const selectedList = lists.find((list) => list.id === selectedListId);
  taskCount = selectedList.tasksSub.subTasksList.length;
  for(i = 0; i < taskCount; i++){
    t=0;
    selectedList.tasksSub.subTasksLiStatus[i].forEach((list) => {
      let currentTask = document.getElementById("ul" + i + "li" + t);
      let currentStatus = list;
      currentTask.style.textDecorationLine = currentStatus;
      t++;
    })
  }
}

// pushes line-through to the correct local storage array position and saves the new value.
function editSingleStatus(event, editId){
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  let listLength = selectedList.tasksSub.subTasksLiStatus.length; 
  for(i = 0; i < listLength; i++){
    let currentId = parseInt(popup[0].id);
    if(currentId === i){
        t=0;
      selectedList.tasksSub.subTasksLiStatus[i].forEach((list) => {
        if(parseInt(editId) === t){
          selectedList.tasksSub.subTasksLiStatus[i].splice(t, 1, "line-through");
          save();
        }
        t++;
      })
    }
  }
  changeListStatus();
}

// Function that sets date for tasks in pop-up-menu.
function singleTaskSetDate(event, currentId){
  event.preventDefault();
  let dayInput = document.getElementById("dayInput");
  let monthInput = document.getElementById("monthInput");
  let yearInput = document.getElementById("yearInput");
  const selectedList = lists.find(list => list.id === selectedListId);
  let count = selectedList.tasksSub.subTasksHeader.length;
  setDay = dayInput.value;
  setMonth = monthInput.value;
  setYear = yearInput.value;
  for(i = 0; i < count; i++){
    if(i === parseInt(currentId)){
      selectedList.tasksSub.subDeadline.day[i].splice(0, 1, setDay);
      selectedList.tasksSub.subDeadline.week[i].splice(0, 1, setMonth);
      selectedList.tasksSub.subDeadline.year[i].splice(0, 1, setYear);
      save();
    }
  }
  renderDeadline();
}

// Renders the current deadline form the subDeadline array from local storage.
function renderDeadline(){
  const selectedList = lists.find(list => list.id === selectedListId);
  let dayInput = document.getElementById("dayInput");
  let monthInput = document.getElementById("monthInput");
  let yearInput = document.getElementById("yearInput");
  let currentId = parseInt(popup[0].id);
  console.log("My last console.log, goodbye webprosjekt -max");
  let count = selectedList.tasksSub.subTasksHeader.length;
  for(i = 0; i < count; i++){
    if(i === currentId){
      dayInput.value = selectedList.tasksSub.subDeadline.day[i];
      monthInput.value = selectedList.tasksSub.subDeadline.week[i];
      yearInput.value =  selectedList.tasksSub.subDeadline.year[i];
    }
  }
}

