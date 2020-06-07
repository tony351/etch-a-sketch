const container = document.querySelector('#container');

//Creates divs based on number entered
function createGrid (length,width) {
    for (i = 0; i < (length*width); i++) {
        let grid = document.createElement('div');
        grid.innerHTML = "yeet";
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
}); */

container.addEventListener('mouseover', function (e) {
    e.target.style.backgroundColor = "purple";
});

// this does not work, work on clear screen
function clearScreen() {
    container.style.backgroundColor = "white";
}




createGrid(16,16)