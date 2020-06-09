// grab container
const container = document.querySelector('#container');

//Creates divs based on number entered
function createGrid (length = 16,width = 16) {
    container.innerHTML = "";
    for (i = 0; i < (length*width); i++) {
        let grid = document.createElement('div');
        grid.classList.add("cell");
        container.appendChild(grid);
    }
    // used .setProperty to utilize the repeat() from CSS grid in JS
    container.style.setProperty('grid-template-columns', 'repeat(' + width + ',1fr)');
    container.style.setProperty('grid-template-rows', 'repeat(' + length + ',1fr)');
}


// theres a bug with the event listener below that colors all the cells of container when hovering near the edge of the container
/*container.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = "purple";
});*/
//set hover effect so that grid divs change colors when mouse passes over
function colorCells() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', function (e)  {
            cell.style.backgroundColor = "purple";
            //console.log(e);
        });
    });
}
// Clear screen / the prompt user to resize 
function clearScreen() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    });
    resize();
    // after resizing, apply mouseover color to all cells
    colorCells();
}

// prompts the user to resize game
function resize () {
    let numCells = prompt('How many squares per side do you want the new grid to be?');
    createGrid(numCells, numCells);

}

// on click, clear screen
const clearBtn = document.querySelector('button');
clearBtn.addEventListener('click', clearScreen)



createGrid()
colorCells()