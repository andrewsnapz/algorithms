// const kthSmallest = (matrix, k) => {
//     let m = matrix[0].length // width
//     let n = matrix.length // height
//     let whichArr = matrix[0].length;
//     let kCount = 0;

//     const kthElement = (grid, kCount) => {
//         let kIdx = k - kCount - 1;
//         return grid[kIdx];
//     };

//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (k > whichArr) {
//                 whichArr += whichArr;
//                 kCount += matrix[0].length;
//                 i++;
//                 continue;
//             }

//             return kthElement(matrix[i], kCount);
//         }
//     }
// };

const kthSmallest = (matrix, k) => {
    matrix = [].concat(...matrix);
    matrix.sort((a,b) => a - b);
    return matrix[k - 1];
};

console.log(kthSmallest([
    [ 1,  5,  9],
    [10, 11, 13],
    [12, 13, 15]
], 8)); // 13

console.log(kthSmallest([[1,2], [1,3]], 2));