let popup = document.getElementsByClassName("popUpContainer");


changeColorheader();
changeListStatus();

function openMenu(event, editId) {
  event.preventDefault();
  popup[0].style.display = "block";
  console.log("open");
  popup[0].innerHTML = "";
  let popupContent = document.createElement('div');
  popupContent.innerHTML = 
  `<div id="changeTaskName">
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
    <div class="memberInputContainer"> 
    </div>
    <p id="backBtn" title="close" onclick="closeMenu()"></p>
    <p class="currrentTaskCount">To-do-list ${parseInt(editId) + 1}</p>
  `
  popup[0].appendChild(popupContent);
  popup[0].id = editId;
  renderSingleTask();
  renderSingleHeader();
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
        <div class="singleTaskBorderStyle">
        <div class="singleStatus" id="${t}" onclick="editSingleStatus(event, this.id)" title="done"></div>
        <div class="singleDelete" id="${t}" onclick="deleteSingleTask(event, this.id)" title="delete"></div>
        <p class="singleTaskCount">${"Task " + (t + 1)}</p>
          <form action="" id=${"singleForm" + t} class="singleForm" onsubmit="editSingleTask(event, this.id)">
            <input type="text" placeholder="${list}" id="${"singleInput" + t}" 
            value="${list}" class="singleInputStyle" style="width: 364px; "></input>
            <button class="singleEdit" title="edit"></button>
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
          selectedList.tasksSub.subTasksLiStatus[i].splice(t, 1);
          save();
        }
        t++;
      })
    }
  }
  console.log("stage5");
  subTaskRender();
  renderSingleTask();
  changeListStatus();
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
          selectedList.tasksSub.subTasksLiStatus[i].splice(t, 1, "none");
          save();
        }
        t++;
      })
    }
  }
  console.log("stage5");
  subTaskRender();
  renderSingleTask();
  changeListStatus();
}

function renderSingleHeader(){
  const selectedList = lists.find((list) => list.id === selectedListId);
  let listLength = selectedList.tasksSub.subTasksList.length;
  taskHeader = document.getElementById("changeTaskName");
  clearElement(taskHeader);
  for(i = 0; i < listLength; i++){
    let currentId = parseInt(popup[0].id);
      if(currentId === i){
        divElement = document.createElement('div');
        divElement.innerHTML = 
        `
          <p class="currentTaskStyle">Header</p>
          <div class="headerDeleteSingle"></div>
          <form>
            <input id="taskNameInput" type="text" placeholder="${selectedList.tasksSub.subTasksHeader[i]}" value="${selectedList.tasksSub.subTasksHeader[i]}" onClick="this.setSelectionRange(0, this.value.length)"></input>
            <button type="onclick" class="singleFormButton"></button>
          </form>
        `
        taskHeader.appendChild(divElement);
      }
  }
}

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

function editSingleStatus(event, editId){
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  let listLength = selectedList.tasksSub.subTasksLiStatus.length; 
  for(i = 0; i < listLength; i++){
    let currentId = parseInt(popup[0].id);
    if(currentId === i){
        t=0;
        console.log("stage3");
      selectedList.tasksSub.subTasksLiStatus[i].forEach((list) => {
        if(parseInt(editId) === t){
          console.log("stage4");
          selectedList.tasksSub.subTasksLiStatus[i].splice(t, 1, "line-through");
          save();
        }
        t++;
      })
    }
  }
  changeListStatus();
}
    // currentForm = document.getElementById("form" + i);
    // currentColor = selectedList.tasksSub.subTasksStatus[i];
    // currentForm.style.backgroundColor = currentColor;
    // console.log(currentColor);



    // event.preventDefault();
    // const selectedList = lists.find((list) => list.id === selectedListId);
    // console.log("Yellow");
    // currentTaskNumber = document.getElementById(currentTask).id;
    // //selectedList.tasksSub.subTasksStatus[currentTaskNumber].splice(0, 1, "#f4b707");
    // selectedList.tasksSub.subTasksStatus[currentTaskNumber].pop();
    // selectedList.tasksSub.subTasksStatus[currentTaskNumber].push("#f4b707");
    // console.log(currentTaskNumber);
    // save();
    // changeColorheader();




    // text-decoration-line:line-through;

    // style.textDecorationLine = "line-through";