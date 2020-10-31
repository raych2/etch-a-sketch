const container = document.querySelector('.container');
const originalGrid = 16;
let playerInput;
let cellNumber;

function resizeGrid() {
    playerInput = prompt('Choose a number between 16 and 100');
    cellNumber = Number(playerInput);
    if (cellNumber >= 16 && cellNumber <=100) {
        container.innerHTML = '';
        createGrid(cellNumber);
    } else {
        prompt('Choose a number between 16 and 100');
    }
}

function clearGrid() {
    if (cellNumber) {
        container.innerHTML = '';
        createGrid(cellNumber);
    } else {
        container.innerHTML = '';
        createGrid(originalGrid);
    }
}

function createGrid(number) {
    let docFragment = document.createDocumentFragment();
    container.style.display = 'grid';
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    //since number of rows and columns are equal, the number can be squared
    for (let i = 0; i < (number ** 2); i++) {
        let square = document.createElement('div');
        square.classList.add('blank');
        docFragment.appendChild(square);
        square.addEventListener('mouseenter', function(e) {
            square.style.backgroundColor = 'black';
        });
    }
    container.appendChild(docFragment);
}

createGrid(originalGrid);

let newGrid = document.querySelector('#resize');
newGrid.addEventListener('click', resizeGrid);

let blankGrid = document.querySelector('#reset');
blankGrid.addEventListener('click', clearGrid);