function setZeroes(matrix) {
    let height = matrix.length;
    let width = matrix[0].length;
    let zeroArray = [];

    // find where all zeroes are located, and store them:
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (matrix[i][j] === 0) {
                zeroArray.push([i,j]);
            }
        }
    }

    console.log(zeroArray) // [[1,1]]
    rowConverter(matrix, zeroArray);
    columnConverter(matrix, zeroArray);
    return matrix;
}

function rowConverter(matrix, zeroArray) {
    let width = matrix[0].length;
    for (let i = 0; i < zeroArray.length; i++) {
        for (let j = 0; j < width; j++) {
            matrix[zeroArray[i][0]][j] = 0;
        }
    }
    return matrix;
}

function columnConverter(matrix, zeroArray) {
    let height = matrix.length;
    for (let i = 0; i < zeroArray.length; i++) {
        for (let j = 0; j < height; j++) {
            matrix[j][zeroArray[i][1]] = 0;
        }
    }
    return matrix;
}

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]])) // [[1,0,1],[0,0,0],[1,0,1]];
console.log(setZeroes([
    [0,1,2,0],
    [3,4,5,2],
    [1,3,1,5]
]))