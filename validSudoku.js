var isValidSudoku = function(board) {
    let rowBoolean = rowChecker(board, 8);
    let columnBoolean = columnChecker(board, 8)
    let threeByThreeBoolean = threeByThreeChecker(board, [1,4,7]);

    if (rowBoolean && columnBoolean && threeByThreeBoolean) return true;
    return false;
};

function rowChecker(board, m, index=0) {
    let set = new Set();
    for (let i = 0; i < m; i++) {
        if (board[index][i] === '.') continue;
        if (!set.has(board[index][i])) {
            set.add(board[index][i]);
        } else {
            return false;
        }
    }

    if (index !== 8) {
        return rowChecker(board, m, index + 1);
    } 
    return true;
};

function columnChecker(board, n, index = 0) {
    let set = new Set();
    for (let i = 0 ; i < n; i++) {
        if(board[i][index] === '.') continue;
        if (!set.has(board[i][index])) {
            set.add(board[i][index]);
        } else {
            return false;
        }
    }
    if (index !== 8) {
        return columnChecker(board, n, index + 1);
    }
    return true;
};

function threeByThreeChecker(board, arr) {
    function spaceChecker(i, j) {
        let set = new Set();

        //origin
        if (board[i][j] !== '.' && !set.has(board[i][j])) {
            set.add(board[i][j]);
        };

        //right
        if (board[i][j + 1] !== '.' && !set.has(board[i][j + 1])) {
            set.add(board[i][j + 1]);
        } else if (board[i][j + 1] !== '.' && set.has(board[i][j + 1])) return false;

        //down
        if (board[i + 1][j] !== '.' && !set.has(board[i + 1][j])) {
            set.add(board[i + 1][j]);
        } else if (board[i + 1][j] !== '.' && set.has(board[i + 1][j])) return false;

        //left
        if (board[i][j - 1] !== '.' && !set.has(board[i][j - 1])) {
            set.add(board[i][j - 1]);
        } else if (board[i][j - 1] !== '.' && set.has(board[i][j - 1])) return false;

        //up
        if (board[i - 1][j] !== '.' && !set.has(board[i - 1][j])) {
            set.add(board[i - 1][j]);
        } else if (board[i - 1][j] !== '.' && set.has(board[i - 1][j])) return false;

        //left up diagonal
        if (board[i - 1][j - 1] !== '.' && !set.has(board[i - 1][j - 1])) {
            set.add(board[i - 1][j - 1]);
        } else if (board[i - 1][j - 1] !== '.' && set.has(board[i - 1][j - 1])) return false;

        //right up diagonal
        if (board[i - 1][j + 1] !== '.' && !set.has(board[i - 1][j + 1])) {
            set.add(board[i - 1][j + 1]);
        } else if (board[i - 1][j + 1] !== '.' && set.has(board[i - 1][j + 1])) return false;

        // left down diagonal
        if (board[i + 1][j - 1] !== '.' && !set.has(board[i + 1][j - 1])) {
            set.add(board[i + 1][j - 1]);
        } else if (board[i + 1][j - 1] !== '.' && set.has(board[i + 1][j - 1])) return false;

        // right down diagonal
        if (board[i + 1][j + 1] !=='.' && !set.has(board[i + 1][j + 1])) {
            set.add(board[i + 1][j + 1]);
        } else if (board[i + 1][j + 1] !=='.' && set.has(board[i + 1][j + 1])) return false;

        return;
    };

    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(spaceChecker(arr[i], arr[j]) === false) return false;
        }
    }
    return true;
};

// console.log(isValidSudoku([
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ])); //true

//   console.log(isValidSudoku([
//     ["8","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ])); //false

//   console.log(isValidSudoku([
//       [".",".",".",".","5",".",".","1","."],
//       [".","4",".","3",".",".",".",".","."],
//       [".",".",".",".",".","3",".",".","1"],
//       ["8",".",".",".",".",".",".","2","."],
//       [".",".","2",".","7",".",".",".","."],
//       [".","1","5",".",".",".",".",".","."],
//       [".",".",".",".",".","2",".",".","."],
//       [".","2",".","9",".",".",".",".","."],
//       [".",".","4",".",".",".",".",".","."]])); //false

console.log(isValidSudoku([
[".",".",".",".",".",".",".",".","."],
["6",".","9",".",".","8",".",".","."],
[".",".",".","4",".","6",".",".","."],
[".",".",".",".",".",".",".","1","."],
[".",".",".",".","2",".",".","3","."],
[".","4",".",".",".",".",".",".","4"],
["5",".",".","6",".",".",".",".","."],
[".",".",".",".",".",".",".",".","."],
[".",".",".",".","7",".","6",".","."]])) // false;