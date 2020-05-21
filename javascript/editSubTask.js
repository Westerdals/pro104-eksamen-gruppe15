const popUpContainer = document.getElementById("popUpContainer");

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