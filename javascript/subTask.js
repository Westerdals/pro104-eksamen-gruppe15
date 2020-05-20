// subTask: All kode for middleContainer

// form og input til sub-task meny
const newChildForm = document.querySelector('[data-new-sub-form]');
const newChildInput = document.querySelector('[data-new-sub-input]');
// UL til sub-task meny, hvor sub-tasks blir lagt inn som li
const subUl = document.querySelector('[sub-data-lists]');

// TODO: underveis
// form og input til sub-task header, (navn man setter selv på sub-task)
const subHeaderText = document.querySelector('[data-sub-list-header]');
const childHeaderForm = document.querySelector('[data-new-sub-header-form]');
const childHeaderInput = document.querySelector('[data-new-sub-header]');

// Kontainer til alle sub-task html elementer som blir generert
const AddContainerEmpty = document.getElementById("AddContainerEmpty");

// Beskrivelse:
// Denne koden gjør at vi kan finne oppgaven brukeren er på
// const selectedList = lists.find(list => list.id === selectedListId)

//RENDER
// renderChildheader(); //TODO: REDO
plussTaskListRender();
subTaskRender();

function plussTaskListRender(){
    const selectedList = lists.find(list => list.id === selectedListId);

    listLength = selectedList.tasksSub.subTasksList.length;
    console.log(listLength);
    //TODO lage en clear for loop som i subTaskRender()
    clearElement(AddContainerEmpty);
    for(i = 0; i < listLength; i++) {
        AddContainerEmpty.innerHTML += 
    ` <div class="subTaskList">
    <div class="subListHeader" data-sub-list-header id=${"form" + i}>
        <form action="" data-new-sub-header-form>
            <input class="subListHeaderText" type="text" placeholder="Task Name.." data-new-sub-header>
        </form>
    </div> 
    <ul class="subUl" sub-data-lists id="${"ul" + i}">
    </ul>
    <div id="formContainer" class="subTaskFormStyle">
        <form action="" data-new-sub-form onsubmit="newChildFormOnsubmit(event)">
            <input type="text" class="subTaskInput" placeholder="new task.." data-new-sub-input id="${"task" + i}">
            <button class="btn create" id="leftbutton">Add</button>
        </form>
    </div>
    </div>
    `
    }
    save();
}

// submit event til sub-tasks, så man kan legge til oppgaver til listen
/*
newChildForm.addEventListener('submit', e => {
    e.preventDefault();

    const selectedList = lists.find(list => list.id === selectedListId);

    listLength = selectedList.tasksSub.subTasksList.length;
    for (i = 0; i < listLength; i++){
        currentUl = document.getElementById("ul" + i);
        if (this.id === currentUl) {
            console.log(subListName);
            const subListName = currentUl.value;
            selectedList.tasksSub.subTasksList[i].push(subListName);
            save();
            newChildInput.value = null;
        }
    }
    
    //const subListName = newChildInput.value 

    //if(subListName == null || subListName === "") return

    //const selectedList = lists.find(list => list.id === selectedListId)

    // console.log så man ser hva som skjer
    //console.log(selectedList.tasksSub.subTasksList[1])

    //selectedList.tasksSub.subTasksList[0].push(subListName)

    //newChildInput.value = null

    // Save er en global funskjon som lagrer data inn i local storage
    plussTaskListRender();
    save();
    // subTaskRenderer gjør at listen blir oppdatert med en gang etter man har lagt til en ny oppgave
    subTaskRender();
});
*/

function newChildFormOnsubmit(event){
    event.preventDefault();
    const selectedList = lists.find(list => list.id === selectedListId);
    listLength = selectedList.tasksSub.subTasksList.length;
    for (i = 0; i < listLength; i++){
        currentUl = document.getElementById("task" + i);
        if (("task" + i == currentUl.id) && currentUl.value !== "") {
            const subListName = currentUl.value;
            selectedList.tasksSub.subTasksList[i].push(subListName);
            save();
            currentUl.value = null;
        }
    }
    plussTaskListRender();
    subTaskRender();
}

// rendrer listen, går gjennom hver string i arrayet tasks og gjør dem om til en (li) list element
function subTaskRender() {
    const selectedList = lists.find(list => list.id === selectedListId);
    for (i = 0; i < listLength; i++){
        currentUlClear = document.getElementById("ul" + i);
        clearElement(currentUlClear);
    }

    listLength = selectedList.tasksSub.subTasksList.length;
    for (i = 0; i < listLength; i++){
        console.log(selectedList.tasksSub.subTasksList[i]);
        selectedList.tasksSub.subTasksList[i].forEach(list => {
                currentUl = document.getElementById("ul" + i);
                listElement = document.createElement('li');
                listElement.classList.add("subLi");
                listElement.innerText = list;
                currentUl.appendChild(listElement);
        })
        save();
    }
    
}

/*
//TODO: REDO
// Submit event for header(overskrift) til sub-task meny
childHeaderForm.addEventListener('submit', e => {
    e.preventDefault()

    const subListHeader = childHeaderInput.value

    const selectedList = lists.find(list => list.id === selectedListId)

    if (selectedList.tasksSub.header.length > 0){
        selectedList.tasksSub.header.pop()
        selectedList.tasksSub.header.push(subListHeader)
    } else {
        selectedList.tasksSub.header.push(subListHeader)
    }

    // renderChildheader() //TODO: REDO

    // childHeaderInput.value = null

    // Funskjoner for å lagre og rendre
    // subTaskHtmlRender()
    save()
})
*/

// Funksjon som sjekker om childHeaderInput og tasksSub.header er tomme, for å så legge inn verdier
/*
function renderChildheader(){
    const selectedList = lists.find(list => list.id === selectedListId)

    if (selectedList.tasksSub.header.length > 0 || childHeaderInput.value < 0){
        childHeaderInput.value = selectedList.tasksSub.header
    } else {
        childHeaderInput.value = "";
    }

}
*/

function plussTaskList(event){
    event.preventDefault();
    const selectedList = lists.find(list => list.id === selectedListId);

    listLength = selectedList.tasksSub.subTasksList.length;

    const newArray = [];

    selectedList.tasksSub.subTasksList.push(newArray);
    save();

    plussTaskListRender();
    subTaskRender();
}

// Gjør at subTask meny kommer opp når man refresher siden 
