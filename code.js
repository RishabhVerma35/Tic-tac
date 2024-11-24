let myTics = document.querySelectorAll("button");
let chance = document.querySelector("#chance");
const myHeading = document.querySelector(".heading");

let myGrid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];//0 means empty , -1 means player, +1 means computer
let flag = 0; // 0 for player , 1 for computer
let win = 0; //to stop the player from playing when a match is already won

let reloadButton = document.querySelector("#reloadButton");

reloadButton.addEventListener("click", function() {
    location.reload(); // This reloads the page
});

for (let i = 0; i < myTics.length; i++) {
    myTics[i].addEventListener("click", handleClick);
}

reloadButton.style.display = "none";


function updateGridIcon() {
    //function will update the grid icon if its element is not empty

    let totalSum = 0;// if there is no 0 in whole grid , which means every value is putted, so restart button popped
    let isFinish = true;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let blockClass = `.block${i}${j}`;
            if(myGrid[i][j] == 0)isFinish =false;
            if (myGrid[i][j] != 0) {
                //now access the block number from the class
                let currGrid = document.querySelector(blockClass);
                //modifying the value, if the value == 1 put X otherwise put O
                if (myGrid[i][j] == 1) {
                    currGrid.textContent = "O";
                } else if (myGrid[i][j] == -1) {
                    currGrid.textContent = "X";
                }
            }
        }
    }
    if(isFinish == true)
        {
            //restart button be aviable
            reloadButton.style.display = "block";
        }
    checkWin();
}

function handleClick(event) {
    if (win == 1) return;

    let b = event.target.classList//extracting digit from the class
    let str = b[1];
    const digits = str.match(/\d/g);//getting className
    const x = parseInt(digits[0]);
    const y = parseInt(digits[1]);
    if (myGrid[x][y] != 0) {
        console.log("it runs");
        return;//if player clicked on already filled value nothing should will happen
    }
    myGrid[x][y] = -1;
    updateGridIcon();

    flag = !flag;
    if(win == 0)
    computerAlgorithm();

}



function computerAlgorithm() {
    //Computer will try to make the player loss
    //check each row , column and diagonal and put 1 where the value is -2,
    //else if not it will be random
    console.log("-------------------Computer Runs ------------------");
    if (win == 1) return;
    let last_EmptyRow = { x: 0, y: 0 };
    let last_EmptyColumn = { x: 0, y: 0 };

    for (let i = 0; i < 3; i++) {
        let rowSum = 0;
        let columnSum = 0;
        for (let j = 0; j < 3; j++) {
            rowSum += myGrid[i][j];
            columnSum += myGrid[j][i];

            if (myGrid[i][j] == 0) {
                last_EmptyRow.x = i;
                last_EmptyRow.y = j;
            }

            if (myGrid[j][i] == 0) {
                last_EmptyColumn.x = j;
                last_EmptyColumn.y = i;
            }
        }

        if (rowSum == -2) {
            if (myGrid[last_EmptyRow.x][last_EmptyRow.y] == 0)
                myGrid[last_EmptyRow.x][last_EmptyRow.y] = 1;
            updateGridIcon();
            return;
        } else if (columnSum == -2) {
            if (myGrid[last_EmptyColumn.x][last_EmptyColumn.y] == 0)
                myGrid[last_EmptyColumn.x][last_EmptyColumn.y] = 1;
            updateGridIcon();
            return;
        }
    }

    //--------------------diagonal search--------------------------------
    //checking if the possibilty of lossing in diagonal
    let x = 0;
    let y = 0;
    let rightDiagonal = 0;
    while (x < 3 && y < 3) {
        if (myGrid[x][y] == 0) {//finding empty slot in diagonal
            emptyX = x;
            emptyY = y;
        }
        rightDiagonal += myGrid[x][y];
        x += 1;
        y += 1;

    }

    if (rightDiagonal == -2) {
        myGrid[emptyX][emptyY] = 1;
        flag = 0;
        updateGridIcon();
        return;
    }

    x = 0;
    y = 2;
    let leftDiagonal = 0;
    while (x < 3 && y >= 0) {
        if (myGrid[x][y] == 0) {//finding empty slot in diagonal
            emptyX = x;
            emptyY = y;
        }
        leftDiagonal += myGrid[x][y];
        x += 1;
        y -= 1;

    }
    if (leftDiagonal == -2) {
        myGrid[emptyX][emptyY] = 1;
        flag = 0;
        updateGridIcon();
        return;
    }

    //if there is no hurry then randomely put the values
    myGrid[emptyX][emptyY] = 1;
    flag = 0;
    updateGridIcon();
}

function updateWin(num) {
    if (num == -1) {
        myHeading.textContent = "Player Wins";
    } else if (num == 1) {
        myHeading.textContent = "Computer wins";
    }
    reloadButton.style.display = "block";
    wins = 1;
}
function checkWin() {
    //if sum is equal to +3 computer win else if -3 human win 
    //search horizontally , diagonally  and vertically
    //-1 = player wins, 1 = Computer win

    for (let i = 0; i < 3; i++) {
        let rowSum = 0;
        let columnSum = 0;
        for (let j = 0; j < 3; j++) {
            rowSum += myGrid[i][j];
            columnSum += myGrid[j][i];
        }
        if (columnSum == 3 || rowSum == 3) {
            //computer wins
            updateWin(1);
            
            return;
        }
        else if (columnSum == -3 || rowSum == -3) {
            //Player wins
            updateWin(-1);
            return;
        }

    }
    let x = 0;
    let y = 0;
    let rightDiagonal = 0;
    while (x < 3 && y < 3) {
        rightDiagonal += myGrid[x][y];
        x += 1;
        y += 1;
    }

    if (rightDiagonal == 3) {
        //computer wins
        updateWin(1);
        return;
    }
    else if (rightDiagonal == -3) {
        //Player wins
        updateWin(-1);
        return;
    }

    x = 0;
    y = 2;
    let leftDiagonal = 0;
    while (x < 3 && y >= 0) {
        leftDiagonal += myGrid[x][y];
        x += 1;
        y -= 1;
    }

    if (leftDiagonal == 3) {
        //computer wins
        updateWin(1);
        return;
    }
    else if (leftDiagonal == -3) {
        //Player wins
        updateWin(-1);
        return;
    }
    return "NULL";
}
