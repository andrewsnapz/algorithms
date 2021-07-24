const countArrangement = (n) => {
  let array = [];
  let permutations = [];
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    array.push(i);
  }

  permutationsHelper(array, [], permutations);
  let height = permutations.length;

  for (let i = 0; i < height; i++) {
    beautifulArrangementCheck(permutations[i], count);
  }
  return count;
};

const permutationsHelper = (array, currentPermutation, permutations) => {
  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutation.concat([array[i]]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
};

const beautifulArrangementCheck = (permutationArr, count) => {
  let idx = 0;
  while (idx < permutationArr.length) {
    if (
      (permutationArr[idx] % idx) + 1 === 0 ||
      idx + (1 % permutationArr[idx]) === 0
    ) {
      idx = idx + 1;
    } else {
      return;
    }
  }
  return count = count + 1;
};

// console.log(countArrangement(3)); // 3
// console.log(countArrangement(4)); // 8
console.log(countArrangement(5)); // 10
// console.log(countArrangement(6)); // 36

// create permutation of elements 1 thru n
/*
[1,2,3]
[2,1,3]
[2,3,1]
[1,3,2]
[3,1,2]
[3,2,1]
*/
// permutaitons: remembering states,
