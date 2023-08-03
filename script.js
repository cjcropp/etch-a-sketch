let slider = document.getElementById("sizeRange");
let output = document.getElementById("demo")
output.textContent = slider.value;

let gridContainer = document.querySelector("#gridContainer");
/*let grid = slider.value
let total = grid * grid*/

function createGrid() {
    let grid = slider.value
    let total = grid * grid
    for (let i = 0; i < total; i++) {
        const gridItem = document.createElement('div');
        gridContainer.append(gridItem);
        gridItem.classList.add('cell');
        gridItem.setAttribute("id", i + 1)
        gridItem.addEventListener("mouseover", () => gridItem.style.setProperty(`background-color`, `red`));
        gridItem.style.height = "auto";
        gridItem.style.width = "auto";
    };
    gridContainer.style.setProperty(`grid-template-columns`, `repeat(${grid}, 1fr)`);
    
};

createGrid();

let cell = document.getElementsByClassName('cell');
console.log(cell);

function addColor () {
    cell.style.setProperty(`color`, `red`);
};

/*while (gridContainer.lastChild) {
    gridContainer.lastChild.remove();
};*/

slider.oninput = function() {
    output.textContent = this.value;
    /*let grid = slider.value;
    let total = grid * grid;*/
    while (gridContainer.lastChild) {
        gridContainer.lastChild.remove();
    };
    createGrid();
};

