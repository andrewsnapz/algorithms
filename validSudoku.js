var isValidSudoku = function(board) {
    let rowBoolean = rowChecker(board, 8);
    let columnBoolean = columnChecker(board, 8)
    let threeByThreeBoolean = threeByThreeChecker(board, [1,4,7]);

    console.log(`rowBoolean: ${rowBoolean}, columnBoolean:${columnBoolean}, threeByThreeBoolean:${threeByThreeBoolean}`)

    if (rowBoolean && columnBoolean && threeByThreeBoolean) return true;
    return false;
};

function rowChecker(board, m, index=0) {
    let set = new Set();

    for (let i = 0; i < m; i++) {
        if (board[index][i] === '.') continue;
        
        if (!set.has(board[index][i])) {
            set.add(board[index][i]);
        } else if (set.has(board[index][i])) {
            return false;
        }
    }

    console.log(set)
    if (index < 8) {
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
        } else if (set.has(board[i][index])) {
            return false;
        };
    }

    if (index < 8) {
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


// function isValidSudoku(board) {
//     let rowBoolean = rowChecker(board);
//     let columnBoolean = columnChecker(board);
//     let threeByThreeBoolean = threeByThreeChecker(board);
    
//     if (rowBoolean && columnBoolean && threeByThreeBoolean) return true;
//     return false;
// };

// function rowChecker(board, index = 0) {
//     let objSet = {};
//     for (let i = 0; i < 8; i++) {
//         if (!objSet[board[index][i]]) objSet[board][i] = 1;
//         if (objSet[board[index][i]]) return false;
//     };
    
//     if (index !== 8) return rowChecker(board, index + 1);
//     return true;
// };

// function columnChecker(board, index = 0) {
//     let objSet = {};
//     for (let i = 0; i < 8; i++) {
//         if (!objSet[board[i][index]]) objSet[i][index] = 1;
//         if (objSet[board[i][index]]) return false;
//     };
    
//     if (index !== 8) return rowChecker(board, index + 1);
//     return true;
// };

// function threeByThreeChecker(board, arr = [1,4,7]) {
//     function spaceChecker(i, j) {
//         let objSet = {};

//         //origin
//         if (board[i][j] !== '.' && !objSet[board[i][j]]) {
//             objSet[board[i][j]] = 1;
//         };

//         //right
//         if (board[i][j + 1] !== '.' && !objSet[board[i][j + 1]]) {
//             objSet[board[i][j]] = 1;
//         } else if (board[i][j + 1] !== '.' && objSet[board[i][j + 1]]) {
//             return false;
//         };

//         //down
//         if (board[i + 1][j] !== '.' && !objSet[board[i + 1][j]]) {
//             objSet[board[i + 1][j]] = 1;
//         } else if (board[i + 1][j] !== '.' && objSet[board[i + 1][j]])  {
//             return false;
//         }

//         //left
//         if (board[i][j - 1] !== '.' && !objSet[board[i][j - 1]]) {
//             objSet[board[i][j - 1]] = 1;
//         } else if (board[i][j - 1] !== '.' && objSet[board[i][j - 1]]) {
//             return false;
//         };

//         //up
//         if (board[i - 1][j] !== '.' && !objSet[board[i - 1][j]]) {
//             objSet[board[i - 1][j]] = 1;
//         } else if (board[i - 1][j] !== '.' && !objSet[board[i - 1][j]]) {
//             return false;
//         };

//         //left up diagonal
//         if (board[i - 1][j - 1] !== '.' && !objSet[board[i - 1][j - 1]]) {
//             objSet[[i - 1][j - 1]] - 1;
//         } else if (board[i - 1][j - 1] !== '.' && objSet[board[i - 1][j - 1]]) {
//             return false;
//         };

//         //right up diagonal
//         if (board[i - 1][j + 1] !== '.' && !objSet[board[i - 1][j + 1]]) {
//             objSet[i - 1][j + 1] = 1;
//         } else if (board[i - 1][j + 1] !== '.' && !objSet[board[i - 1][j + 1]]) {
//             return false;
//         };

//         // left down diagonal
//         if (board[i + 1][j - 1] !== '.' && !objSet[board[i + 1][j - 1]]) {
//             objSet[board[i + 1][j - 1]] = 1;
//         } else if (board[i + 1][j - 1] !== '.' && !objSet[board[i + 1][j - 1]]) {
//             return false;
//         };

//         // right down diagonal
//         if (board[i + 1][j + 1] !=='.' && !objSet[board[i + 1][j + 1]]) {
//             objSet[board[i + 1][j + 1]] = 1;
//         } else if (board[i + 1][j + 1] !=='.' && !objSet[board[i + 1][j + 1]]) {
//             return false;
//         };

//         return;
//     };

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             spaceChecker(arr[i], arr[j]);
//         }
//     }
//     return true;
// };



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

//5, [1, 8]