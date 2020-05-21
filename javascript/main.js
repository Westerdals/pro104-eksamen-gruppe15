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

function currentTaskname(){
    let currentTask = document.getElementById("currentTask");
    lists.forEach(list => {
        if(selectedListId === list.Id) {
            currentTask.innerText = selectedListId;
        }
    })
    renderSubMenu();
}

function createList(name) {
    // id blir generert med date så de alltid får en unik id
    let subTasksList = [[]];
    let subTasksHeader = [[]];
    let subTasksStatus = [["#f4b707"]]
    let tasksSub = { id: Date.now().toString() + 1, subTasksHeader, subTasksList, subTasksStatus, subMembers: [] };
    return { id: Date.now().toString(), name: name, members: [], tasksSub: tasksSub};
}

function saveAndRender() {
    //alle funksjoner som genererer og lagrer verdier
    save();
    render();
    subTaskRender();
}

// Funksjonen save lagrer verdier i localstorage, så man kan bruke denne når man skal legge inn en ny verdi
function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}


function render() {
    clearElement(listsContainer);
    taskRender();
    const selectedList = lists.find(list => list.id === selectedListId);
    if (selectedListId == null){
        return;
    } else {
        middleListTitle.innerText = selectedList.name
    }
}

// Funksjon som rendrer (genererer en liste for hver task i tasks, og viser listen med navn <li> tasks.name </li>)
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

// Funskjon som fjerner alle firstChild i et html element
// TODO: lag en ny funksjon som fjerner mer en bare first child
function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

// rendrer tasks når man refresher siden
render();