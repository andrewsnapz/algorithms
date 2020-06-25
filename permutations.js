// function getPermutations(array) {
//     const permutations = [];
//     permutationsHelper(array, [], permutations);
//     return permutations;
// }

// function permutationsHelper(array, currentPermutation, permutations) {
//     if (!array.length && currentPermutation.length) {
//         permutations.push(currentPermutation);
//     } else {
//         for (let i = 0; i < array.length; i++) {
//             const newArray = array.slice(0, i).concat(array.slice(i + 1));
//             console.log("this is the newArray: ", array.slice(0, i), array.slice(i+1), newArray);
//             const newPermutation = currentPermutation.concat([array[i]]);
//             console.log("this is the new permutation: ", newPermutation)
//             permutationsHelper(newArray, newPermutation, permutations);
//         }
//     }
// }

// console.log(getPermutations([1,2,3]));

const permute = letters => {
    let permutations = [];
    dfs(letters, [], Array(letters.length).fill(false), permutations);
    return permutations;
};

const dfs = (letters, path, used, permutations) => {
    console.log(used);
    console.log(path)
    if (path.length === letters.length) {
        permutations.push(Array.from(path));
        return;
    }
    for (let i=0; i < letters.length; i++) {
        if (used[i]) continue;
        path.push(letters[i]);
        used[i] = true;
        dfs(letters, path, used, permutations);
        path.pop();
        used[i] = false;
    }

};

console.log(permute([1,2,3])) //