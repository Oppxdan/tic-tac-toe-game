const winningText = document.querySelector(".winning-text");
const restartButton = document.querySelector("#restart-button");
const winningMessage = document.querySelector(".winning-message");
const boardCells = document.querySelectorAll(".cell");
restartButton.addEventListener("click", function() {
    winningMessage.style.display='none';
    restartButton.style.display = 'none';
    winningText.style.display = 'none';
    for (i=0; i<9; i++) {
        boardCells[i].textContent = '';
    }
    playGame();
})
function playGame() {
    console.log(boardCells);
    let filledBox = 
    [false, false, false,
    false, false, false,
    false, false, false];
    let excludedValues = [];
    let computerIndexes = [];
    let playerIndexes = [];
    winningMessage.style.display = 'none';
    restartButton.style.display = 'none';
    winningText.style.display = 'none';
    let gameWon = false;
    let board = 
      [0,1,2,
      3,4,5,
      6,7,8];
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
    ];
    function checkWin() {
        function getAllIndexes(val) {
            var indexes = [];
            let i = -1;
            while ((i = board.indexOf(val, i+1)) != -1){
                indexes.push(i);
            }
            return indexes;
        }
            
        var playerIndexes2 = getAllIndexes('x');
        var computerIndexes2 = getAllIndexes('o');
    
        /* 
        
        */
    
    
        if (playerIndexes2.includes(0)) {
            if (playerIndexes2.includes(1)) {
                if (playerIndexes2.includes(2)) {
                    gameWon = true;
                    console.log("You win!");
                    winningText.textContent = "X Wins!";
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (playerIndexes2.includes(3)) {
            if (playerIndexes2.includes(4)) {
                if (playerIndexes2.includes(5)) {
                    gameWon = true;
                    console.log("You win!");
                    winningText.textContent = "X Wins!";
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (playerIndexes2.includes(6)) {
            if (playerIndexes2.includes(7)) {
                if (playerIndexes2.includes(8)) {
                    gameWon = true;
                    console.log("You win!");
                    winningText.textContent = "X Wins!";
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (playerIndexes2.includes(0)) {
            if (playerIndexes2.includes(3)) {
                if (playerIndexes2.includes(6)) {
                    gameWon = true;
                    console.log("You win!");
                    winningText.textContent = "X Wins!";
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (playerIndexes2.includes(1)) {
            if (playerIndexes2.includes(4)) {
                if (playerIndexes2.includes(7)) {
                    gameWon = true;
                    console.log("You win!");
                    winningText.textContent = "X Wins!";
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (playerIndexes2.includes(2)) {
            if (playerIndexes2.includes(5)) {
                if (playerIndexes2.includes(8)) {
                    gameWon = true;
                    console.log("You win!");
                    winningText.textContent = "X Wins!";
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (playerIndexes2.includes(0)) {
            if (playerIndexes2.includes(4)) {
                if (playerIndexes2.includes(8)) {
                    gameWon = true;
                    console.log("You win!");
                    winningText.textContent = "X Wins!";
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (playerIndexes2.includes(2)) {
            if (playerIndexes2.includes(4)) {
                if (playerIndexes2.includes(6)) {
                    gameWon = true;
                    console.log("You win!");
                    winningText.textContent = "X Wins!";
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
    
        /* 
        Check if the computer has won
        */
    
        if (computerIndexes2.includes(0)) {
            if (computerIndexes2.includes(1)) {
                if (computerIndexes2.includes(2)) {
                    gameWon = true;
                    winningText.textContent = "O Wins!";
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (computerIndexes2.includes(3)) {
            if (computerIndexes2.includes(4)) {
                if (computerIndexes2.includes(5)) {
                    gameWon = true;
                    winningText.textContent = "O Wins!"
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (computerIndexes2.includes(6)) {
            if (computerIndexes2.includes(7)) {
                if (computerIndexes2.includes(8)) {
                    gameWon = true;
                    winningText.textContent = "O Wins!"
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (computerIndexes2.includes(0)) {
            if (computerIndexes2.includes(3)) {
                if (computerIndexes2.includes(6)) {
                    gameWon = true;
                    winningText.textContent = "O Wins!"
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (computerIndexes2.includes(1)) {
            if (computerIndexes2.includes(4)) {
                if (computerIndexes2.includes(7)) {
                    gameWon = true;
                    winningText.textContent = "O Wins!"
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (computerIndexes2.includes(2)) {
            if (computerIndexes2.includes(5)) {
                if (computerIndexes2.includes(8)) {
                    gameWon = true;
                    winningText.textContent = "O Wins!"
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (computerIndexes2.includes(0)) {
            if (computerIndexes2.includes(4)) {
                if (computerIndexes2.includes(8)) {
                    gameWon = true;
                    console.log("You lose!");
                    winningText.textContent = "O Wins!"
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (computerIndexes2.includes(2)) {
            if (computerIndexes2.includes(4)) {
                if (computerIndexes2.includes(6)) {
                    gameWon = true;
                    console.log("You lose!");
                    winningText.textContent = "O Wins!"
                    winningMessage.style.display='block';
                    restartButton.style.display = 'block';
                    winningText.style.display = 'block';
                }
            }
        }
        if (gameWon == false) {
            if (excludedValues.length == 9) {
                console.log("Tie!");
                winningText.textContent = "Tie!"
                winningMessage.style.display='block';
                restartButton.style.display = 'block';
                winningText.style.display = 'block';
            }
        }
    
    }
    
    for (let i=0; i<=9; i++) {
        boardCells[i].addEventListener('click', function() {
            if (gameWon == false) {
                if (filledBox[i] == false) {
                    filledBox[i] = true;
                    console.log(filledBox[i]);
                    boardCells[i].textContent="X";
                    board[i] = 'x';
                    playerIndexes.push(i);
                    excludedValues.push(i);
                    checkWin();
                    if (excludedValues.length < 8 && gameWon == false) {
                        setTimeout(function(){}, 100);
                        let computerChoice = Math.floor(Math.random() * filledBox.length);
                        while (excludedValues.includes(computerChoice)) {
                            computerChoice = Math.floor(Math.random() * filledBox.length); 
                        }
                        excludedValues.push(computerChoice);
                        filledBox[computerChoice] = true;
                        boardCells[computerChoice].textContent="O";
                        board[computerChoice] = 'o';
                        computerIndexes.push(computerChoice);
                        console.log(computerChoice);
                        console.log(excludedValues);
                        console.log(playerIndexes);
                        console.log(computerIndexes);
                        checkWin();
                    }
    
                    
            }
        }
    })
    }
}
playGame();

