const container = document.querySelector('#container');

//Creates divs based on number entered
function createGrid (length = 16,width = 16) {
    for (i = 0; i < (length*width); i++) {
        let grid = document.createElement('div');
        grid.classList.add("cell");
        container.appendChild(grid);
    }
    // used .setProperty to utilize the repeat() from CSS grid in JS
    container.style.setProperty('grid-template-columns', 'repeat(' + width + ',1fr)');
    container.style.setProperty('grid-template-rows', 'repeat(' + length + ',1fr)');
}

//set hover effect so that grid divs change colors when mouse passes over
/*
const cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', (e) => {
            console.log(e)});
});  */

container.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = "purple";
});

// Clear screen / the prompt user to resize 
function clearScreen() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
    resize();
}

// prompts the user to resize game
function resize () {
    let numCells = prompt('How many squares per side do you want the new grid to be?');
    createGrid(numCells, numCells);
}


const clearBtn = document.querySelector('button');
clearBtn.addEventListener('click', clearScreen)



createGrid()