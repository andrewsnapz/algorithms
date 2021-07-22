/* 
Given an image represented by an NxN matrix, where each pixel 
in the image is 4 bytes, write a method to rotate the image by 90 degrees. 
Can you do this in place?
*/

const rotateMatrix = (matrix) => {
  let size = matrix.length;
  let layerCount = size / 2;

  for (let i = 0; i < layerCount; i++) {
    let first = i;
    let last = size - first - 1;

    for (let i = first; i < last; i++) {
      let offset = i - first;
      console.log(`offset: ${offset}`);

      let top = matrix[first][i];
      let rightSide = matrix[i][last];
      let bottom = matrix[last][last - offset];
      let leftSide = matrix[last - offset][first];

      matrix[first][i] = leftSide;
      matrix[i][last] = top;
      matrix[last][last - offset] = rightSide;
      matrix[last - offset][first] = bottom;
    }
  }
  return matrix;
};
// console.log(
//   rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

/* 
[[7,4,1],
 [8,5,2],
 [9,6,3]]
*/

console.log(
  rotateMatrix([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
);

/*
[[15,13,2,5],
[14,3,4,1],
[12,6,8,9],
[16,7,10,11]]
*/
