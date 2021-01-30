const container = document.getElementById("container");





function createGrid() {

    for (i = 0; i < 32; i++) {
        const rows = document.createElement("div");
        rows.id=""+i;
        container.appendChild(rows).className = "grid-items";

    }


}

//     const rows = [];
// for (i = 0; i < 32; i++) {
//     rows[i] = document.createElement("div");
//     container.appendChild(rows[i]).className = "grid-items";

// }
createGrid();
function reset() {
	for(var i = 0; i < rows.length; i++){
		rows[i].style.backgroundColor = "white";
	}
}

    // window.addEventListener('mouseover',function(e){
    //     const item = e;
    //     console.log(item);
    // });




// for (var i = 0; i < rows.length; i++) {
//     rows[i].style.backgroundColor = "black";

//     if(rows[i].onmouseover==true){
//         rows[i].style.backgroundColor = "white";

//     }
// }

