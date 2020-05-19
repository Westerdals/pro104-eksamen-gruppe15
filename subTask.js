const newChildForm = document.querySelector('[data-new-sub-form]')
const newChildInput = document.querySelector('[data-new-sub-input]')
const subUl = document.querySelector('[sub-data-lists]')

const childHeaderForm = document.querySelector('[data-new-sub-header-form]')
const childHeaderInput = document.querySelector('[data-new-sub-header]')

const subTaskList = document.getElementsByClassName("subTaskContainer")

newChildForm.addEventListener('submit', e => {
    e.preventDefault();

    const subListName = newChildInput.value 

    /*if(subListName == null || subListName === "") return*/

    const selectedList = lists.find(list => list.id === selectedListId)

    console.log(selectedList.tasks)

    selectedList.tasks.push(subListName)

    newChildInput.value = null

    save()
    subTaskRender()
})

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

function subTaskHeaderRender() {
    clearElement
}

childHeaderForm.addEventListener('submit', e => {
    e.preventDefault()

    const subListHeader = childHeaderInput.value

    const selectedList = lists.find(list => list.id === selectedListId)

    console.log(selectedList.header)

    selectedList.header.push(subListHeader)

    newListInput.value = null
    console.log("headerCommit");

    subTaskHtmlRender()
    save()
})

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

subTaskRender()

