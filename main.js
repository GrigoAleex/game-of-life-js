/**
 * 1. Improve this code <3
 * 2. Add a feature of your choice: 
 *      - [ ] youtube like controls (pause, play, step (1 turn only))
 *      - [ ] scene setter (https://playgameoflife.com/)
 */

let board = [];
let HTMLElements = [];
const size = 50;

start();

function start() {
    console.log("Conway's Game of Life");

    let table = document.getElementById("app");
    for (let i = 0; i < size; i++) {
        let row = document.createElement("tr");
        board.push(new Array(size).fill(0));
        HTMLElements.push([]);

        for (let j = 0; j < size; j++) {
            let cell = document.createElement("td");
            row.appendChild(cell);
            HTMLElements[i].push(cell);
        }

        table.appendChild(row);
    }

    for (let k = 0; k < size * size * 0.3; k++) {
        let x = Math.floor(Math.random() * size);
        let y = Math.floor(Math.random() * size);

        if (board[y][x] == 0) {
            board[y][x] = 1;
        } else {
            k--;
        }
    }

    for (let i = 0; i < size; i++) // y 
    {
        for (let j = 0; j < size; j++) // x 
        {
            let className = "cell ";
            if (board[i][j] == 1) className = className + "alive";
            HTMLElements[i][j].setAttribute('class', className);
        }
    }

    setInterval(update, 300);
}

function update() {

    let newBoard = [];

    for (let i = 0; i < size; i++) {
        newBoard.push(new Array(size).fill(0));
    }

    for (let i = 0; i < size; i++) // y 
    {
        for (let j = 0; j < size; j++) // x 
        {
            let neighboursCount = 0;
            for (let di = -1; di <= 1; di++) {
                for (let dj = -1; dj <= 1; dj++) {
                    if (di == dj && dj == 0) continue;
                    if (i + di > 0 && i + di < size && j + dj > 0 && j + dj < size) {
                        neighboursCount += board[i + di][j + dj];
                    }
                }
            }

            if (neighboursCount < 2 || neighboursCount > 3) newBoard[i][j] = 0;
            else if (neighboursCount == 3) newBoard[i][j] = 1;
            else if (board[i][j] == 1) newBoard[i][j] = 1;
        }
    }

    board = newBoard;
    for (let i = 0; i < size; i++) // y 
    {
        for (let j = 0; j < size; j++) // x 
        {
            let className = "cell ";
            if (board[i][j] == 1) className = className + "alive";
            HTMLElements[i][j].setAttribute('class', className);
        }
    }
}





