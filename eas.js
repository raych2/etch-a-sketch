const container = document.querySelector('.container');
const originalGrid = 16;
let newGrid = document.querySelector('#resize');
let blankGrid = document.querySelector('#reset');
let blackSquare = document.querySelector('#black');
let shadeSquare = document.querySelector('#shade');
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

function generateRandomColor(min = 0, max = 255) {
    let r = Math.floor(Math.random() * (max - min + 1) + min);
    let g = Math.floor(Math.random() * (max - min + 1) + min);
    let b = Math.floor(Math.random() * (max - min + 1) + min);
    return `rgb(${r},${g},${b})`;
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
            blankSquare.style.backgroundColor = 'rgb(0,0,0)';
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
            cell.style.backgroundColor = 'rgb(0,0,0)';
        });
    });
});

shadeSquare.addEventListener('click', function (e) {
    let gridCells = document.querySelectorAll('.blank');
    gridCells.forEach((cell) => {
        let originalShade = 255;
        cell.addEventListener('mouseover', function(e) {
            originalShade -= 25;
            cell.style.backgroundColor = `rgb(${originalShade},${originalShade},${originalShade})`;
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