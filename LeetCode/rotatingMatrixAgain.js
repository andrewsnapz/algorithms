function rotate(matrix){
    transpose(matrix);
    reverse(matrix);
    return matrix;
}

function transpose(matrix) {    
    // flipping x and y coordinates:
    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < row; column++) {
            let temp = matrix[row][column];
            matrix[row][column] = matrix[column][row];
            matrix[column][row] = temp;
        }
    }
    return matrix;
}

function reverse(matrix) {
    let rows = matrix.length;
    for (let i = 0; i < rows; i++) {
        matrix[i].reverse();
    }
    return matrix;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]])); // [[7,4,1], [8,5,2], [9,6,3]]