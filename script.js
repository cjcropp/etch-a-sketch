const gridContainer = document.querySelector("#gridContainer");
const grid = {rows:10,columns:10}
const total = grid.rows * grid.columns

createGrid(total);

function createGrid(total) {
    for (let i = 0; i < total; i++) {
        const gridItem = document.createElement('div');
        gridContainer.append(gridItem);
        gridItem.textContent = `${i+1}`
        gridItem.classList.add('cell');
    };
    gridContainer.style.setProperty(`grid-template-columns`, `repeat(${grid.columns}, 1fr)`)
};



/*const gridContainer = document.getElementById("gridContainer");*/

/*function makeGrid(rows, columns) {
    for (i = 0; i < (rows * columns); i++) {
        let gridItem = document.createElement("div");
        gridContainer.appendChild(gridItem).className = "cell";
    };
};

makeGrid(3, 3);*/