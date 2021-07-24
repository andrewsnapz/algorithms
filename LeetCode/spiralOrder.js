const spiralOrder = (matrix) => {
  if (matrix.length === 1) return matrix[0];
  let order = [];
  // matrix[0] first row
  // matrix[0][matrix.length - 1] last element in first array
  // matrix[matrix.length - 1] last row (need to reverse)
  // matrix[1][0] first element in column

  const getDimensions = () => {
    getFirstRow(matrix[0], order);
    getLastColumn(matrix, order);
    getLastRow(matrix[matrix.length - 1], order);
    getFirstColumn(matrix, order);
    getInner(matrix, order);
    return order;
  };

  return getDimensions();
};

const getFirstRow = (row, order) => {
  for (let i = 0; i < row.length; i++) {
    order.push(row[i]);
  }
  return order;
};

const getLastColumn = (matrix, order) => {
  let n = matrix.length;

  for (let i = 1; i < n; i++) {
    order.push(matrix[i][matrix[i].length - 1]);
  }
  return order;
};

const getLastRow = (row, order) => {
  for (let i = row.length - 2; i >= 0; i--) {
    order.push(row[i]);
  }
  return order;
};

const getFirstColumn = (matrix, order) => {
  for (let i = matrix.length - 2; i >= 1; i--) {
    order.push(matrix[i][0]);
  }
  return order;
};

const getInner = (matrix, order, innerIndex = 1) => {
  if (matrix.length <= 3 && matrix[0].length <= 2) return order;
  order.push(matrix[1][innerIndex]);

  if (innerIndex === matrix[0].length - 2) {
    return order;
  }
  return getInner(matrix, order, innerIndex + 1);
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
// [1,2,3,6,9,8,7,4,5]

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);

console.log(
  spiralOrder([[1]]) // 1
);
// [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(spiralOrder([[3], [2]]));

// console.log(
//   spiralOrder([
//     [1, 2, 3, 4, 5, 6],
//     [7, 8, 9, 10, 11, 12],
//     [13, 14, 15, 16, 17, 18],
//   ])
// );
