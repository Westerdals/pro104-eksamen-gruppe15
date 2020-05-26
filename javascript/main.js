// main: Grunnlaget for videre utbygging 

// Viktigste kode: 
// Funksjonen som lager arrayet i local storage: function createList(name)
// Her kan man legge til flere arrays i tasks (LOCAL_STORAGE_LIST_KEY)

// Kontainer 
const listsContainer = document.querySelector('[data-lists]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

const LOCAL_STORAGE_LIST_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId';
// Hoved localStorage arrayet, det blir generert under i koden, og strings blir pushet andre steder i koden
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
// selectedListId endrer seg i forhold til hvilken oppgave som har blitt trykket på i lists
// Blir brukt til å vite hvilken task man er på i tasks, så man kan gjøre endringer på riktig sted med å sammenligne id
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

const middleListTitle = document.querySelector('[middle-list-title]');

// Click event som endrer selected list, og gjør det mulig å få tak i den verdien
// Todo endre sånn at selected list ikke kan være ander liste elementer en main-task listen
listsContainer.addEventListener('click', e => {
    // Sjekker om tagname til det man har trykket på er li
    if(e.target.tagName.toLowerCase() === 'li') {
        // ender local storage selected list til verdien av targeted list (listId)
        selectedListId = e.target.dataset.listId;
        // Funskjoner for å lagre og rendre
        currentTaskname();
        saveAndRender();
        //renderChildheader();
        renderSubMenu();
    }
})

// Input event for projects, creates a new index in the lists array as the object in createList() function.
newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const listName = newListInput.value;
    if (listName == null || listName === '') return;
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list);
    // Funskjoner for å lagre og rendre
    saveAndRender();
})

// Renders the  project name in the middle header.
function currentTaskname(){
    let currentTask = document.getElementById("currentTask");
    lists.forEach(list => {
        if(selectedListId === list.Id) {
            currentTask.innerText = selectedListId;
        }
    })
    renderSubMenu();
}

// This is the object that the lists array in local storage generates every time a new project is created.
// I use Data.now().toString() to always create a uniqe id for the projects. 
// tasksSub is for all the sub-tasks
// Members are for members that are added from the members local-storage-array, it is used for projects.
// User takes the value from the users local-storage-arrray.
// subMembers is used to add members to task-lists.
function createList(name) {
    let subTasksList = [[]];
    let subTasksHeader = [[]];
    let subTasksStatus = [["#808080"]];
    let subTasksLiStatus = [[]];
    let tasksSub = { id: Date.now().toString() + 1, subTasksHeader, subTasksList, subTasksStatus, subTasksLiStatus, subMembers: [] };
    let user = { name: [], image: [] };
    let members = {name: [], image: [], display: []};
    return { id: Date.now().toString(), name: name, members: members, user: user, tasksSub: tasksSub};
}

// Functions that render and save lists, put into one, så its easier to call all the functions. 
function saveAndRender() {
    save();
    render();
    subTaskRender();
}

// Calls save every time we want to set a item in local storage. (members/users has its own.)
function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

// Clears the ul that the li-projects are inn, then puts them back in the taskRender() function below.
function render() {
    clearElement(listsContainer);
    taskRender();
    const selectedList = lists.find(list => list.id === selectedListId);
    if (selectedListId == null){
        return;
    } else {
        middleListTitle.value = selectedList.name;
    }
}

function changeProjectName(event){
    event.preventDefault();
    let currentTaskForm = document.getElementById("currentTask");
    currentTaskValue = currentTaskForm.value;
    const selectedList = lists.find(list => list.id === selectedListId);
    if (currentTaskValue.length > 20){
        // Alert to long project name
        alert("Project-name needs to be less than 21");
        currentTaskForm.value = selectedList.name;
    } else if (currentTaskValue.length <= 0){
        // Alert to short project name
        alert("Project-name needs to be greater than 0");
        currentTaskForm.value = selectedList.name;
    } else{
        selectedList.name = currentTaskValue;
        save();
        render();
    }
}

// Renders every list in the tasks-array, this represents the projects.
function taskRender() {
    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.dataset.listId = list.id;
        listElement.classList.add("list-name");
        listElement.innerText = list.name;
        // sjekker etter selected list og gir den en egen verdi 'avtive-list', man bruker active-list til å ender på selected list i css
        if (list.id === selectedListId) {
            listElement.classList.add('active-list');
        }
        listsContainer.appendChild(listElement);
    })
}

// Removes all children from a element, while this has first child -> remove child.
function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// Renders projects when we refresh  the page
render();