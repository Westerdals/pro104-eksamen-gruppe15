const popUpContainer = document.getElementById("popUpContainer");

// Onclick on the task-lists that deletes all values in the local storage position that the iterator gives, 
// and the renderSubMenu renders all tasks again and the list is deleted ("poooofh magic")
// The function has a delay so it is possible to play an animation before the task-list disappears.
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
            selectedList.tasksSub.subDeadline.day.splice(i, 1);
            selectedList.tasksSub.subDeadline.week.splice(i, 1);
            selectedList.tasksSub.subDeadline.year.splice(i, 1);
        }
    }
    save();
    renderSubMenu();
    }, 300)
}