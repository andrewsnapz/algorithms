function setZeroes(matrix) {
    let n = matrix.length; // height
    let m = matrix[0].length // width

    function rowConverter(i, m, rowIndex = 0) {
        matrix[i][rowIndex] = 0;
        if (rowIndex !== m) return rowConverter(i, m, rowIndex + 1);
        return matrix;
    };

    function columnConverter(j, n, columnIndex = 0) {
        console.log(matrix[columnIndex][j])
        matrix[columnIndex][j] = 0;
        if (columnIndex !== n) return columnConverter(j, n, columnIndex + 1);
        return matrix;
    };

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 0) {
                console.log(`this is i: ${i}, this is j: ${j}`)
                rowConverter(i, m);
                columnConverter(j, n);
            };
        }
    }
    return matrix;
};

console.log(setZeroes([
    [1,1,1],
    [1,0,1],
    [1,1,1]]
    )); 

    /* 
    [
        [1,0,1],
        [0,0,0],
        [1,0,1],
    ]
    */