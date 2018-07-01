// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

let canvas = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");
let color = document.getElementById("colorPicker");

color.addEventListener("click", function(){});

sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

function makeGrid() {
    for (let rw=0; rw<document.getElementById("inputHeight").value; rw++){
        const row =  canvas.insertRow(rw);
        for (let col=0; col<document.getElementById("inputWeight").value; col++){
            const cell = row.insertCell(col);
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}
