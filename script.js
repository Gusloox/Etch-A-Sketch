const container = document.getElementById("container");




function createGrid() {
    size = prompt('Please enter the side of the grid(max 100):');
    while(size>100){
        size = prompt('Please enter the side of the grid(max 100):');

    }
    for (i = 0; i < size; i++) {
        let rows = document.createElement("div");
        rows.id = "grid-items";
        container.appendChild(rows).className = "grid-items";
        rows.addEventListener("mouseover",paint);
    }

}



function reset() {
    const items = document.getElementsByClassName("grid-items");
   while(items[0]){
       items[0].parentNode.removeChild(items[0]);

   }

    createGrid();
}


function paint(e) {
    e.target.style.backgroundColor= "black";

}




