const popUpContainer = document.getElementById("popUpContainer");

function editSubTask(event, deleteId) {
    const selectedList = lists.find((list) => list.id === selectedListId);
    event.preventDefault();
    console.log("delete");
    let taskCount = selectedList.tasksSub.subTasksList.length;
    console.log(deleteId);
    console.log();
    for(i = 0; i < taskCount; i++){
        if (deleteId === "delete" + i){
            console.log("splice");
            selectedList.tasksSub.subTasksList.splice(i, 1);
            selectedList.tasksSub.subTasksHeader.splice(i, 1);
            selectedList.tasksSub.subTasksStatus.splice(i, 1);
        }
    }
    save();
    renderSubMenu();
    console.log("deletus fetus");
}

/*
function renderEditBox(){
    popUpBox = document.createElement('div');
    console.log("renderEditBox")
    popUpBox.innerHTML = 
    `
    <div id="popUpBox">
        <div id="popUpInput1">
            <h3>Change something</h3>
            <form>
                <input type="text" placeholder="input"> 
                <button>edit</button>
            </form>
        </div>
    </div>
    `
    popUpContainer.appendChild(popUpBox);
}

*/