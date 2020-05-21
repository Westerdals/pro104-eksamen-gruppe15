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

function renderSubMenu() {
  //RENDER
  plussTaskListRender();
  renderChildheader();
  subTaskRender();
}

function plussTaskListRender() {
  const selectedList = lists.find((list) => list.id === selectedListId);

  listLength = selectedList.tasksSub.subTasksList.length;
  console.log(listLength);
  //TODO lage en clear for loop som i subTaskRender()
  clearElement(AddContainerEmpty);
  for (i = 0; i < listLength; i++) {
    AddContainerEmpty.innerHTML += ` <div class="subTaskList">
    <div class="subListHeader" data-sub-list-header id=${"form" + i}>
        <form action="" data-new-sub-header-form onsubmit="childHeaderFormNew(event)" class="headerForm">
            <input class="subListHeaderText" type="text" placeholder="Task Name.." data-new-sub-header id="${
              "head" + i
            }">
        </form>
        <div class="editButton" onclick="openMenu()"></div>
    </div> 
    <ul class="subUl" sub-data-lists id="${"ul" + i}">
    </ul>
    <div class="subTaskFormStyle">
        <form action="" data-new-sub-form onsubmit="newChildFormOnsubmit(event)" id="createTaskForm">
            <input type="text" class="subTaskInput" placeholder="new task.." data-new-sub-input id="${
              "task" + i
            }">
            <button class="btn create" id="leftbutton">Add</button>
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
    selectedList.tasksSub.subTasksList[i].forEach((list) => {
      currentUl = document.getElementById("ul" + i);
      listElement = document.createElement("li");
      listElement.classList.add("subLi");
      listElement.innerText = list;
      currentUl.appendChild(listElement);
    });
    save();
  }
}

// Submit event for header(overskrift) til sub-task meny
function childHeaderFormNew(event) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);

  let listLength = selectedList.tasksSub.subTasksHeader.length;

  console.log(listLength);
  for (i = 0; i < listLength; i++) {
    let currentHeaderInput = document.getElementById("head" + i);
    let subListHeader = currentHeaderInput.value;
    let isTaskEmpty = false;

    if (subListHeader !== "") {
      if (selectedList.tasksSub.subTasksHeader[i].length > 0) {
        selectedList.tasksSub.subTasksHeader[i].pop();
        selectedList.tasksSub.subTasksHeader[i].push(subListHeader);
        console.log("subListHeader-NOT-EMPTY");
        save();
      } else {
        console.log("subListHeader-EMPTY");
        selectedList.tasksSub.subTasksHeader[i].push(subListHeader);
        selectedList.tasksSub.subTasksList[i].pop();
        save();
      }
    }
  }
  renderChildheader();
}

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

function plussTaskList(event) {
  event.preventDefault();
  const selectedList = lists.find((list) => list.id === selectedListId);

  listLength = selectedList.tasksSub.subTasksList.length;

  const newArray = [];
  const newArrayH = [""];

  selectedList.tasksSub.subTasksList.push(newArray);
  selectedList.tasksSub.subTasksHeader.push(newArrayH);
  save();

  renderSubMenu();
}
