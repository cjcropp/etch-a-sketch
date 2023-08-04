let slider = document.getElementById("sizeRange");
let output = document.getElementById("demo")
output.textContent = slider.value;
let color = document.getElementById("colorSelector")

let gridContainer = document.querySelector("#gridContainer");

function createGrid() {
    let grid = slider.value
    let total = grid * grid
    for (let i = 0; i < total; i++) {
        const gridItem = document.createElement('div');
        gridContainer.append(gridItem);
        gridItem.classList.add('cell');
        gridItem.setAttribute("id", i + 1);
        gridItem.addEventListener("mouseover", () => gridItem.style.setProperty(`background-color`, `${color.value}`));
        gridItem.style.height = "auto";
        gridItem.style.width = "auto";
    };
    gridContainer.style.setProperty(`grid-template-columns`, `repeat(${grid}, 1fr)`);
    
};

createGrid();

let cell = document.getElementsByClassName('cell');

function addColor () {
    cell.style.setProperty(`color`, color.value);
};


color.oninput = function () {
    for (let i = 1; i < cell.length+1; i++) {
        let gridItem = document.getElementById(`${i}`)
        gridItem.addEventListener("mouseover", function() { 
            gridItem.style.setProperty(`background-color`, `${color.value}`)
        });
    };
};

slider.oninput = function() {
    output.textContent = this.value;
    while (gridContainer.lastChild) {
        gridContainer.lastChild.remove();
    };
    createGrid();
};

function getRandomColor () {
    let color = '#'+Math.random().toString(16).substr(-6);
    return color;
};
    
const rgbButton = document.getElementById('rgbButton');
rgbButton.onclick = function () {
    for (let i = 1; i < cell.length+1; i++) {
        let gridItem = document.getElementById(`${i}`)
        gridItem.addEventListener("mouseover", function() { 
            gridItem.style.setProperty(`background-color`, `${getRandomColor()}`)
        });
    };
};
