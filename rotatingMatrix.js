const rotate = matrix => {
    matrix.forEach(arr => console.log(arr, "before"))
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
        matrix.forEach(arr => console.log(arr, 'first switch'))
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }

    matrix.forEach(arr => console.log(arr, 'final'))
};

console.log(rotate([
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ]));

//   console.log(rotate([
//     [ 5, 1, 9,11],
//     [ 2, 4, 8,10],
//     [13, 3, 6, 7],
//     [15,14,12,16]
//   ]));

