let gridSize = parseInt(prompt("Grid Size:"));

const MAX_GRID_SIZE = 50;

if (isNaN(gridSize) || gridSize <= 0 || gridSize > MAX_GRID_SIZE) {
    gridSize = MAX_GRID_SIZE;
}


let container = document.querySelector('.container')

for (let i = 0; i < gridSize ; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div)
}

let squares = document.querySelectorAll('.square')



/**For get Black color on click */
let isDrawing = false;

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        isDrawing = true;
        square.style.backgroundColor = 'black';
    });

    square.addEventListener('mouseenter', (event) => {
        if (event.buttons === 1 && isDrawing) {
            square.style.backgroundColor = 'black';
        }
    });

    square.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    square.addEventListener('mousemove', (event) => {
        if (isDrawing) {
            square.style.backgroundColor = 'black';
        }
    });
});