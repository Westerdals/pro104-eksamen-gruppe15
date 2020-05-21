
function editSubTask(event) {
    event.preventDefault();
    renderEditBox();
    console.log("popUp");
}

function renderEditBox(){
    popUpBox = document.createElement('div');
    console.log("renderEditBox")
    popUpBox.innerHTML = 
    `
    <div id="popUpContainer"></div>
    `
    
}