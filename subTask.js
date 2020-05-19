// subTask: All kode for middleContainer

// form og input til sub-task meny
const newChildForm = document.querySelector('[data-new-sub-form]')
const newChildInput = document.querySelector('[data-new-sub-input]')
// UL til sub-task meny, hvor sub-tasks blir lagt inn som li
const subUl = document.querySelector('[sub-data-lists]')

// TODO: underveis
// form og input til sub-task header, (navn man setter selv på sub-task)
const childHeaderForm = document.querySelector('[data-new-sub-header-form]')
const childHeaderInput = document.querySelector('[data-new-sub-header]')

// Kontainer til alle sub-task html elementer som blir generert
const subTaskList = document.getElementsByClassName("subTaskContainer")

// Beskrivelse:
// Denne koden gjør at vi kan finne oppgaven brukeren er på
// const selectedList = lists.find(list => list.id === selectedListId)


// submit event til sub-tasks, så man kan legge til oppgaver til listen
newChildForm.addEventListener('submit', e => {
    e.preventDefault();
    
    const subListName = newChildInput.value 

    /*if(subListName == null || subListName === "") return*/

    const selectedList = lists.find(list => list.id === selectedListId)

    // console.log så man ser hva som skjer
    console.log(selectedList.tasks)

    selectedList.tasks.push(subListName)

    newChildInput.value = null

    // Save er en global funskjon som lagrer data inn i local storage
    save()
    // subTaskRenderer gjør at listen blir oppdatert med en gang etter man har lagt til en ny oppgave
    subTaskRender()
})

// rendrer listen, går gjennom hver string i arrayet tasks og gjør dem om til en (li) list element
function subTaskRender() {

    clearElement(subUl)
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks.forEach(tasks => {
        for (i = 0; i < selectedList.tasks.length; i++)
        listElement = document.createElement('li')
        listElement.classList.add("subLi")
        listElement.innerText = tasks
        subUl.appendChild(listElement)
    })
}

// Submit event for header(overskrift) til sub-task meny
childHeaderForm.addEventListener('submit', e => {
    e.preventDefault()

    const subListHeader = childHeaderInput.value

    const selectedList = lists.find(list => list.id === selectedListId)

    console.log(selectedList.header)

    selectedList.header.push(subListHeader)

    newListInput.value = null
    console.log("headerCommit");

    // Funskjoner for å lagre og rendre
    subTaskHtmlRender()
    save()
})

// Render til hele sub-task elementet (html) og input av de lagrede verdiene fra: header [], tasks [].
//TODO: underveis, subTaskList.appendChild(subTaskCreate) må endres på
//TODO: må lage en ny konteiner i html som er helt tom, eller en ny clearElement funksjon som fjerner alt. 
function subTaskHtmlRender(){
    const selectedList = lists.find(list => list.id === selectedListId)
    subTaskName = selectedList.header[0]
    console.log(subTaskName)
    subTaskList.innerHTML = ""

    subTaskCreate = document.createElement("div")
    subTaskCreate.inner = 
    `<div class="subListHeader">
        <p class="subTask">${subTaskName}</p>
    </div> 
        <ul class="subUl" sub-data-lists>

        </ul>
    <div id="formContainer">
        <form action="" data-new-sub-form>
            <input type="text" id="leftInput" placeholder="new task name" data-new-sub-input>
            <button class="btn create" id="leftbutton">Add</button>
        </form>
    </div>
    `;
    
    subTaskList.appendChild(subTaskCreate)
}

// Gjør at subTask meny kommer opp når man refresher siden
subTaskRender()

