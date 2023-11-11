// Constants
const numDigits = 9;
const boardSize = 9;
const board = [
    "---9---67",
    "-9----2-8",
    "46--78---",
    "32--94-7-",
    "7--6-3--2",
    "-1-78--43",
    "---85--16",
    "5-1----9-",
    "67---9---"
];
const solution = [
    "835921467",
    "197465238",
    "462378159",
    "328594671",
    "754613982",
    "916782543",
    "249857316",
    "581236794",
    "673149825"
];


let numSelected = null;
let errors = 0;


const errorDisplay = document.getElementById("error");
const boardContainer = document.getElementById("board");
const digitsContainer = document.getElementById("digits");


document.addEventListener("DOMContentLoaded", setGame);

function setGame() {
    createDigits();
    createBoard();
}

function createDigits() {
    for (let i = 1; i <= numDigits; i++) {
        let number = createNumberElement(i);
        digitsContainer.appendChild(number);
    }
}

function createNumberElement(number) {
    let numberElement = document.createElement("div");
    numberElement.id = number;
    numberElement.innerText = number;
    numberElement.addEventListener("click", selectNumber);
    numberElement.classList.add("number");
    return numberElement;
}

function createBoard() {
    for (let r = 0; r < boardSize; r++) {
        for (let c = 0; c < boardSize; c++) {
            let tile = createTileElement(r, c);
            boardContainer.appendChild(tile);
        }
    }
}

function createTileElement(row, col) {
    let tile = document.createElement("div");
    tile.id = `${row}-${col}`;
    tile.innerText = board[row][col] !== "-" ? board[row][col] : "";
    tile.classList.add("tile");
    if (board[row][col] !== "-") {
        tile.classList.add("tile-start");
    }
    if (row === 2 || row === 5) {
        tile.classList.add("horizontal-line");
    }
    if (col === 2 || col === 5) {
        tile.classList.add("vertical-line");
    }
    tile.addEventListener("click", selectTile);
    return tile;
}

function selectNumber() {
    if (numSelected !== null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText !== "") {
            return;
        }

        let [row, col] = this.id.split("-").map(Number);

        if (solution[row][col] === numSelected.id) {
            this.innerText = numSelected.id;
        } else {
            errors += 1;
            errorDisplay.innerText = errors;
        }
    }
}
