let popup = document.getElementById("popUpContainer");

var toDo = document.querySelector('[data-new-color-1]');

var doing = document.querySelector('[data-new-color-2]');

var feedback = document.querySelector('[data-new-color-3]');

var done = document.querySelector('[data-new-color-4]');

var subList = document.querySelector('[data-sub-list-header]');

changeColorheader();

function openMenu(event, editId) {
  event.preventDefault();
  popup.style.display = "block";
  console.log("open");
  popup.innerHTML = "";
  let popupContent = document.createElement('div');
  popupContent.innerHTML = 
  `<div id="changeTaskName">
      <!-- Changing the name - here -->
    <!-- Input here js (Max?) -->
    <input id="taskNameInput" type="text" placeholder="Task Name..">
    </div>
    <div id="selectStatus">
      <div> 
        <p id="selectTxt">Select status on assignment</p>
      <div id="${editId}" class="status" onclick="changeColor(event, this.id)">
        To do
      </div>
      <div id="${editId}" class="status" onclick="changeColor2(event, this.id)">
        Doing
      </div>
      <div id="${editId}" class="status" onclick="changeColor3(event, this.id)">
        Waiting for feedback
      </div>
      <div id="${editId}" class="status" onclick="changeColor4(event, this.id)">
        Done
      </div>
    </div>
    <p>Task ${parseInt(editId) + 1}</p>
    </div>
    <p id="backBtn" title="close" onclick="closeMenu()"></p>
  `
  popup.appendChild(popupContent);
}



function closeMenu() {
  popup.style.display = "none";
  console.log("close");

}


function changeColor(event, currentTask) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  console.log("Yellow");
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
  console.log("Yellow");
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
  console.log("Yellow");
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