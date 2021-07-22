/*
Zero Matrix: Write an algorithm such that if an element in an MxN matrix 
is 0, its entire row and column are set to 0
*/

const zeroMatrix = (matrix) => {
  let indexes = [];
  let height = matrix.length;
  let width = matrix[0].length;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (matrix[i][j] === 0) {
        indexes.push([i, j]);
      }
    }
  }

  for (let i = 0; i < indexes.length; i++) {
    horizontalZeroes(indexes[i][0], matrix);
    verticalZeroes(indexes[i][1], matrix);
  }
};

const horizontalZeroes = (index, matrix) => {
  let row = matrix[index];
  let width = matrix[0].length;
  for (let i = 0; i < width; i++) {
    row[i] = 0;
  }
  return matrix;
};

const verticalZeroes = (index, matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][index] = 0;
  }
  return matrix;
};

console.log(
  zeroMatrix([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
/*
[
     [1,0,1],
     [0,0,0],
     [1,0,1]
]
*/

console.log(
  zeroMatrix([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
/*
[
     [0,0,0,0],
     [0,4,5,0],
     [0,3,1,0]
]
*/
