// subTask: All kode for middleContainer

// form og input til sub-task meny
const newChildForm = document.querySelector('[data-new-sub-form]')
const newChildInput = document.querySelector('[data-new-sub-input]')
// UL til sub-task meny, hvor sub-tasks blir lagt inn som li
const subUl = document.querySelector('[sub-data-lists]')

// TODO: underveis
// form og input til sub-task header, (navn man setter selv på sub-task)
const subHeaderText = document.querySelector('[data-sub-list-header]');
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
    console.log(selectedList.tasksSub.subTasks)

    selectedList.tasksSub.subTasks.push(subListName)

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
    selectedList.tasksSub.subTasks.forEach(tasks => {
        for (i = 0; i < selectedList.tasksSub.subTasks.length; i++)
        listElement = document.createElement('li')
        listElement.classList.add("subLi")
        listElement.innerText = tasks
        subUl.appendChild(listElement)
    })

    renderChildheader()
}

// Submit event for header(overskrift) til sub-task meny
childHeaderForm.addEventListener('submit', e => {
    e.preventDefault()

    const subListHeader = childHeaderInput.value

    const selectedList = lists.find(list => list.id === selectedListId)

    console.log(subListHeader)
    console.log(selectedList.tasksSub.header)

    if (selectedList.tasksSub.header.length > 0){
        selectedList.tasksSub.header.pop()
        selectedList.tasksSub.header.push(subListHeader)
    } else {
        selectedList.tasksSub.header.push(subListHeader)
    }

    console.log(selectedList.tasksSub.header.length)
    renderChildheader()

    // childHeaderInput.value = null

    // Funskjoner for å lagre og rendre
    // subTaskHtmlRender()
    save()
})

// Funksjon som sjekker om childHeaderInput og tasksSub.header er tomme, for å så legge inn verdier
function renderChildheader(){
    const selectedList = lists.find(list => list.id === selectedListId)

    if (selectedList.tasksSub.header.length > 0 || childHeaderInput.value < 0){
        childHeaderInput.value = selectedList.tasksSub.header
    } else {
        childHeaderInput.value = "";
    }

}

// Gjør at subTask meny kommer opp når man refresher siden
subTaskRender()

