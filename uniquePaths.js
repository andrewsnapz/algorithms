var uniquePaths = function(m,n) {
    let matrix = [];
    let uniquePaths = 0;
    let arr = new Array(m).fill(0);
    for(let i = 0; i < n; i++) {
        matrix.push(arr);
    };

    function move(i, j, matrix) {
        console.log(`this is i: ${i} and this is j:${j}`)
        if (i === n - 1 && j === m - 1) {
            uniquePaths++;
            return;
        }

        if (matrix[i + 1][j] !== 0 && matrix[i][j + 1] !== 0) {
            return;
        }

        if (matrix[i][j + 1] === 0 && matrix[i + 1][j] === 0) {
            move(i + 1, j, matrix);
            return move(i, j + 1, matrix);

        } 
        if (matrix[i][j + 1] === 0 && matrix[i + 1][j] !== 0) {
            return move(i, j + 1, matrix);
        }

        if (matrix[i + 1][j] === 0 && matrix[i][j + 1] !== 0) {
            return move(i + 1, j, matrix);  
        }
    };
    move(0, 0, matrix);
    console.log(uniquePaths);
}
console.log(uniquePaths(3,2))