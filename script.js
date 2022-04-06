const boardCells = document.querySelectorAll(".cell");
console.log(boardCells);
let filledBox = 
[false, false, false,
false, false, false,
false, false, false];

for (let i=0; i<9; i++) {
    boardCells[i].addEventListener('click', function(){
        if (filledBox[i] == false) {
            filledBox[i] = true;
            console.log(filledBox[i]);
            boardCells[i].textContent="X";
        }
    })
}

