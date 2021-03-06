// subTask: All kode for middleContainer

// form og input til sub-task meny
const newChildForm = document.querySelector("[data-new-sub-form]");
const newChildInput = document.querySelector("[data-new-sub-input]");
// UL til sub-task meny, hvor sub-tasks blir lagt inn som li
const subUl = document.querySelector("[sub-data-lists]");

// TODO: underveis
// form og input til sub-task header, (navn man setter selv på sub-task)
const subHeaderText = document.querySelector("[data-sub-list-header]");
const childHeaderForm = document.querySelector("[data-new-sub-header-form]");
const childHeaderInput = document.querySelector("[data-new-sub-header]");

// Kontainer til alle sub-task html elementer som blir generert
const AddContainerEmpty = document.getElementById("AddContainerEmpty");

// Beskrivelse:
// Denne koden gjør at vi kan finne oppgaven brukeren er på
// const selectedList = lists.find(list => list.id === selectedListId)

renderSubMenu();

// Renders all task-list changes, so when we make a new change it updates automatically without having to refresh the page. 
function renderSubMenu() {
  plussTaskListRender();
  renderChildheader();
  subTaskRender();
  changeColorheader();
  changeListStatus();
  renderProjectMembers();
}

// Renders out a task-list
function plussTaskListRender() {
  const selectedList = lists.find((list) => list.id === selectedListId);

  listLength = selectedList.tasksSub.subTasksList.length;
  //TODO lage en clear for loop som i subTaskRender()
  clearElement(AddContainerEmpty);
  for (i = 0; i < listLength; i++) {
    AddContainerEmpty.innerHTML += ` <div class="subTaskList">
    <div class="subListHeader" data-sub-list-header id="${"form" + i}" style="background-color:#424249;">
        <form action="" data-new-sub-header-form onsubmit="childHeaderFormNew(event)" class="headerForm">
            <input class="subListHeaderText" type="text" placeholder="Type list name" data-new-sub-header id="${"head" + i}" onblur="childHeaderFormNew(event)">
        </form>
        <div class="deleteButton" title="Delete" onclick="editSubTask(event, this.id)" id="${"delete" + i}"></div>
        <div class="editButton" title="Edit" onclick="openMenu(event, this.id)" id="${i}"></div>
    </div> 
    <ul class="subUl" sub-data-lists id="${"ul" + i}">
    </ul>
    <div class="subTaskFormStyle">
        <form action="" data-new-sub-form onsubmit="newChildFormOnsubmit(event)" id="createTaskForm">
            <input type="text" class="subTaskInput" placeholder="New task.." data-new-sub-input id="${
              "task" + i
            }">
            <button class="subTaskButton" id="middleButton">Add</button>
        </form>
    </div>
    </div>
    `;
  }
  save();
}

function newChildFormOnsubmit(event) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);
  listLength = selectedList.tasksSub.subTasksList.length;
  for (i = 0; i < listLength; i++) {
    currentUl = document.getElementById("task" + i);
    if ("task" + i == currentUl.id && currentUl.value !== "") {
      const subListName = currentUl.value;
      selectedList.tasksSub.subTasksList[i].push(subListName);
      selectedList.tasksSub.subTasksLiStatus[i].push("none");
      save();
      currentUl.value = null;
    }
  }
  renderSubMenu();
}

// rendrer listen, går gjennom hver string i arrayet tasks og gjør dem om til en (li) list element
function subTaskRender() {
  const selectedList = lists.find((list) => list.id === selectedListId);
  for (i = 0; i < listLength; i++) {
    currentUlClear = document.getElementById("ul" + i);
    clearElement(currentUlClear);
  }

  listLength = selectedList.tasksSub.subTasksList.length;
  for (i = 0; i < listLength; i++) {
    t = 0;
    selectedList.tasksSub.subTasksList[i].forEach((list) => {
      currentUl = document.getElementById("ul" + i);
      listElement = document.createElement("li");
      listElement.classList.add("subLi");
      listElement.setAttribute("id", "ul" + i + "li" + t);
      listElement.innerText = list;
      currentUl.appendChild(listElement);
      t++;
    });
    save();
  }
}

// Submit event for header(overskrift) til sub-task meny
function childHeaderFormNew(event){
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);

  let listLength = selectedList.tasksSub.subTasksHeader.length;

  for (i = 0; i < listLength; i++) {
    let currentHeaderInput = document.getElementById("head" + i);
    let subListHeader = currentHeaderInput.value;
    let isTaskEmpty = false;

    if (subListHeader !== "") {
      if (selectedList.tasksSub.subTasksHeader[i].length > 0) {
        selectedList.tasksSub.subTasksHeader[i].pop();
        selectedList.tasksSub.subTasksHeader[i].push(subListHeader);
        save();
      } else {
        selectedList.tasksSub.subTasksHeader[i].push(subListHeader);
        selectedList.tasksSub.subTasksList[i].pop();
        save();
      }
    }
  }
  renderChildheader();
}

// Renders the task-list header for every task-list. 
function renderChildheader() {
  const selectedList = lists.find((list) => list.id === selectedListId);

  listLength = selectedList.tasksSub.subTasksHeader.length;
  for (i = 0; i < listLength; i++) {
    currentHeaderInput = document.getElementById("head" + i);
    if (
      selectedList.tasksSub.subTasksHeader[i].length > 0 ||
      currentHeaderInput.value < 0
    ) {
      currentHeaderInput.value = selectedList.tasksSub.subTasksHeader[i];
    } else {
      currentHeaderInput.value = null;
    }
  }
}

// Creates a new task-list, and pushes the default values into the local storage array. 
function plussTaskList(event) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);

  listLength = selectedList.tasksSub.subTasksList.length;

  const newArray = [];
  const newArrayH = [""];
  const newArrayC = [["#808080"]];
  const newArrayL = [];

  //DEADLINE VALUE
  const day = [];
  const week = [];
  const year = [2020];

  selectedList.tasksSub.subTasksList.push(newArray);
  selectedList.tasksSub.subTasksHeader.push(newArrayH);
  selectedList.tasksSub.subTasksStatus.push(newArrayC);
  selectedList.tasksSub.subTasksLiStatus.push(newArrayL);
  // Deadline
  selectedList.tasksSub.subDeadline.day.push(day);
  selectedList.tasksSub.subDeadline.week.push(week);
  selectedList.tasksSub.subDeadline.year.push(year);
  
  save();

  renderSubMenu();
}
