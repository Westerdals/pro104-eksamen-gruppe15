//Kjører dragPopup() med popUpContainer div fra index.html
dragPopup(document.getElementById("popUpContainer"));

function dragPopup(element){
    var x1 = 0, y1 = 0, x2 = 0, y2 = 0;//Deafult x & y posisjon for musepeker, start og slutt
    var draggableHeader = document.getElementById("draggableHeader");
    //Sjekker mot id på div i index.html
    if (draggableHeader) {
        draggableHeader.onmousedown = mouseDown;//Kjører mouseDown() når brukeren håller venstre museknapp nede
    }
    
    function mouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        
        //Får tak musepeker sin posisjon 
        x2 = e.clientX;
        y2 = e.clientY;
        
        //Kjører closeDrag() når brukeren slipper venstre museknapp
        document.onmouseup = closeDrag;
        
        //Kjører dragElement() hvis brukeren flytter musepeker
        document.onmousemove = dragElement;
    }

    function dragElement(e) {
        e = e || window.event;
        e.preventDefault();
        
        //Finner ny posisjon for musepeker
        x1 = x2 - e.clientX;
        y1 = y2 - e.clientY;
        x2 = e.clientX;
        y2 = e.clientY;
        
        //Definnerer popUp'n sin nye posisjon
        element.style.top = (element.offsetTop - y1) + "px";
        element.style.left = (element.offsetLeft - x1) + "px";
    }

    function closeDrag() {
        //Setter statement til null for at popUp'n skal slutte og flytte seg når brukeren slipper venstre museknapp
        document.onmouseup = null;
        document.onmousemove = null;
    }

}
