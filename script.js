const boardCells = document.querySelectorAll(".cell");
console.log(boardCells);
let filledBox = 
[false, false, false,
false, false, false,
false, false, false];
let excludedValues = [];
let computerIndexes = [];
let playerIndexes = [];
let gameWon = false;
const possibilities = [
    /* Rows */
    [0,1,2],
    [3,4,5],
    [6,7,8],
    /* Columns */
    [0,3,6],
    [1,4,7],
    [2,5,8],
    /* Diagonals */
    [0,4,8],
    [2,4,6]
]

for (let i=0; i<=9; i++) {
    boardCells[i].addEventListener('click', function(){
        if (computerIndexes == )
        if (filledBox[i] == false) {
            filledBox[i] = true;
            console.log(filledBox[i]);
            boardCells[i].textContent="X";
            playerIndexes.push(i);
            excludedValues.push(i);
            if (excludedValues.length < 8) {
                let computerChoice = Math.floor(Math.random() * filledBox.length);
                while (excludedValues.includes(computerChoice)) {
                    computerChoice = Math.floor(Math.random() * filledBox.length); 
                }
                excludedValues.push(computerChoice);
                filledBox[computerChoice] = true;
                boardCells[computerChoice].textContent="O";
                computerIndexes.push(computerChoice);
                console.log(computerChoice);
                console.log(excludedValues);
                console.log(playerIndexes);
                console.log(computerIndexes);
            }
        }
    })
}

