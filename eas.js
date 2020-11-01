const container = document.querySelector('.container');
const originalGrid = 16;
let newGrid = document.querySelector('#resize');
let blankGrid = document.querySelector('#reset');
let blackSquare = document.querySelector('#black');
let colorfulSquare = document.querySelector('#random');
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

function generateRandomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
}

function createGrid(number) {
    container.style.display = 'grid';
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    //since number of rows and columns are equal, the number can be squared
    for (let i = 0; i < (number ** 2); i++) {
        let square = document.createElement('div');
        square.style.backgroundColor = 'white';
        square.classList.add('blank');
        container.appendChild(square);
    }
    //add default black background color to grid squares during mouseover
    let squares = document.querySelectorAll('.blank');
    squares.forEach(blankSquare => {
        blankSquare.addEventListener('mouseover', function (e) {
            blankSquare.style.backgroundColor = '#000000';
        });
    });
}

createGrid(originalGrid);

newGrid.addEventListener('click', resizeGrid);

blankGrid.addEventListener('click', clearGrid);

blackSquare.addEventListener('click', function (e) {
    let gridCells = document.querySelectorAll('.blank');
    gridCells.forEach((cell) => {
        cell.addEventListener('mouseover', function(e) {
            cell.style.backgroundColor = '#000000';
        });
    });
});

colorfulSquare.addEventListener('click', function (e) {
    let gridCells = document.querySelectorAll('.blank');
    gridCells.forEach((cell) => {
        cell.addEventListener('mouseover', function (e) {
            cell.style.backgroundColor = generateRandomColor();
        });
    });
});