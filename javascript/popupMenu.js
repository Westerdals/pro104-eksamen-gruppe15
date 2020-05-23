let popup = document.getElementsByClassName("popUpContainer");


changeColorheader();

function openMenu(event, editId) {
  event.preventDefault();
  popup[0].style.display = "block";
  console.log("open");
  popup[0].innerHTML = "";
  let popupContent = document.createElement('div');
  popupContent.innerHTML = 
  `<div id="changeTaskName">
      <!-- Changing the name - here -->
    <input id="taskNameInput" type="text" placeholder="Task Name..">
    </div>
      <div id="editTaskListContainer">
      </div>
    <div id="selectStatus">
      <div> 
        <p id="selectTxt">Select status on assignment</p>
      <div id="${editId}"class="blackStatus" onclick="changeColor(event, this.id)">
        <p class="statusP">To do</p>
      </div>
      <div id="${editId}" class="yellowStatus" onclick="changeColor2(event, this.id)">
        <p class="statusP">Doing</p>
      </div>
      <div id="${editId}" class="blueStatus" onclick="changeColor3(event, this.id)">
        <p class="statusP">Waiting for feedback</p>
      </div>
      <div id="${editId}" class="greenStatus" onclick="changeColor4(event, this.id)">
        <p class="statusP">Done</p>
      </div>
      </div>
    </div>
    <p id="backBtn" title="close" onclick="closeMenu()"></p>
    <p class="currrentTaskCount">To-do-list ${parseInt(editId) + 1}</p>
  `
  popup[0].appendChild(popupContent);
  popup[0].id = editId;
  renderSingleTask();
}

function closeMenu() {
  popup[0].style.display = "none";
  console.log("close");
}

function changeColor(event, currentTask) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  console.log("black");
  currentTaskNumber = document.getElementById(currentTask).id;
  //selectedList.tasksSub.subTasksStatus[currentTaskNumber].splice(0, 1, "#f4b707");
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].pop();
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].push("#424249");
  console.log(currentTaskNumber);
  save();
  changeColorheader();
}

function changeColor2(event, currentTask) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  console.log("Yellow");
  currentTaskNumber = document.getElementById(currentTask).id;
  //selectedList.tasksSub.subTasksStatus[currentTaskNumber].splice(0, 1, "#f4b707");
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].pop();
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].push("#f4b707");
  console.log(currentTaskNumber);
  save();
  changeColorheader();
}

function changeColor3(event, currentTask) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  console.log("blue");
  currentTaskNumber = document.getElementById(currentTask).id;
  //selectedList.tasksSub.subTasksStatus[currentTaskNumber].splice(0, 1, "#f4b707");
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].pop();
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].push("#4184c6");
  console.log(currentTaskNumber);
  save();
  changeColorheader();
}

function changeColor4(event, currentTask) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  console.log("green");
  currentTaskNumber = document.getElementById(currentTask).id;
  //selectedList.tasksSub.subTasksStatus[currentTaskNumber].splice(0, 1, "#f4b707");
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].pop();
  selectedList.tasksSub.subTasksStatus[currentTaskNumber].push("#69D126");
  console.log(currentTaskNumber);
  save();
  changeColorheader();
}

//lists.find((list) => list.id === selectedListId);

function changeColorheader(){
  const selectedList = lists.find((list) => list.id === selectedListId);
  taskCount = selectedList.tasksSub.subTasksStatus.length;
  for(i = 0; i < taskCount; i++){
    currentForm = document.getElementById("form" + i);
    currentColor = selectedList.tasksSub.subTasksStatus[i];
    currentForm.style.backgroundColor = currentColor;
    console.log(currentColor);
  }
}

function renderSingleTask(){
  const selectedList = lists.find((list) => list.id === selectedListId);
  let singleEditContainer = document.getElementById("editTaskListContainer");
  clearElement(singleEditContainer);
  let listLength = selectedList.tasksSub.subTasksList.length;
  console.log(popup[0].id);
  for(i = 0; i < listLength; i++){
    let currentId = parseInt(popup[0].id);
    if(currentId === i){
      t=0;
      selectedList.tasksSub.subTasksList[i].forEach((list) => {
        divElement = document.createElement('div');
        divElement.innerHTML = 
        `
        <div>
        <div class="singleDelete" id="${t}" onclick="deleteSingleTask(event, this.id)" title="delete"></div>
        <p class="singleTaskCount">${"task" + (t + 1)}</p>
        <form action="" id=${"singleForm" + t} class="singleForm" onsubmit="editSingleTask(event, this.id)">
          <input type="text" placeholder="${list}" id="${"singleInput" + t}" value="${list}"></input>
          <button class="singleEdit"></button>
        </form>
        </div>
        `
        singleEditContainer.appendChild(divElement);
        t++;
      })
    }
  }

}

function deleteSingleTask(event, deleteId) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  console.log("deleteSingle");
  let listLength = selectedList.tasksSub.subTasksList.length; 
  for(i = 0; i < listLength; i++){
    let currentId = parseInt(popup[0].id);
    if(currentId === i){
        t=0;
        console.log("stage3");
      selectedList.tasksSub.subTasksList[i].forEach((list) => {
        if(parseInt(deleteId) === t){
          console.log("stage4");
          selectedList.tasksSub.subTasksList[i].splice(t, 1);
          save();
        }
        t++;
      })
    }
  }
  console.log("stage5");
  subTaskRender();
  renderSingleTask();
}

function editSingleTask(event, editId){
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  console.log("stage1");
  let listLength = selectedList.tasksSub.subTasksList.length;
  for(i = 0; i < listLength; i++){
    let currentId = parseInt(popup[0].id);
    if(currentId === i){
      t=0;
      selectedList.tasksSub.subTasksList[i].forEach((list) => {
        if(editId === "singleForm" + t){
          newValue = document.getElementById("singleInput" + t).value;
          selectedList.tasksSub.subTasksList[i].splice(t, 1, newValue);
          save();
        }
        t++;
      })
    }
  }
  console.log("stage5");
  subTaskRender();
  renderSingleTask();
}