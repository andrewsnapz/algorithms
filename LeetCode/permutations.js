function getPermutations(array) {
  const permutations = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(array, currentPermutation, permutations) {
  console.log("array: ", array);
  console.log("currentPermutation: ", currentPermutation);
  console.log("permutations: ", permutations);

  if (!array.length && currentPermutation.length) {
    permutations.push(currentPermutation);
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArray = array.slice(0, i).concat(array.slice(i + 1));
      const newPermutation = currentPermutation.concat([array[i]]);
      permutationsHelper(newArray, newPermutation, permutations);
    }
  }
}

console.log(getPermutations([1, 2, 3]));

// const permute = letters => {
//     let permutations = [];
//     dfs(letters, [], Array(letters.length).fill(false), permutations);
//     return permutations;
// };

// const dfs = (letters, path, used, permutations) => {
//     if (path.length === letters.length) {
//         permutations.push(Array.from(path));
//         return;
//     }
//     for (let i=0; i < letters.length; i++) {
//         if (used[i]) continue;
//         path.push(letters[i]);
//         used[i] = true;
//         dfs(letters, path, used, permutations);
//         path.pop();
//         used[i] = false;
//     }

// };

// console.log(permute([1,2,3]))
