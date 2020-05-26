const popUpContainer = document.getElementById("popUpContainer");

function editSubTask(event, deleteId) {
    const selectedList = lists.find((list) => list.id === selectedListId);
    event.preventDefault();
    let parent = document.getElementById(deleteId).parentNode.parentNode;
    parent.style.animationName = "deleteBox";
    setTimeout(function(){
        let taskCount = selectedList.tasksSub.subTasksList.length;
    for(i = 0; i < taskCount; i++){
        if (deleteId === "delete" + i){
            selectedList.tasksSub.subTasksList.splice(i, 1);
            selectedList.tasksSub.subTasksHeader.splice(i, 1);
            selectedList.tasksSub.subTasksStatus.splice(i, 1);
            selectedList.tasksSub.subTasksLiStatus.splice(i, 1);
        }
    }
    save();
    renderSubMenu();
    }, 300)
}