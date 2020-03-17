function getPermutations(array) {
    const permutations = [];
    permutationsHelper(array, [], permutations);
    return permutations;
}

function permutationsHelper(array, currentPermutation, permutations) {
    if (!array.length && currentPermutation.length) {
        permutations.push(currentPermutation);
    } else {
        for (let i = 0; i < array.length; i++) {
            const newArray = array.slice(0, i).concat(array.slice(i + 1));
            console.log("this is the newArray: ", array.slice(0, i), array.slice(i+1), newArray);
            const newPermutation = currentPermutation.concat([array[i]]);
            console.log("this is the new permutation: ", newPermutation)
            permutationsHelper(newArray, newPermutation, permutations);
        }
    }
}

console.log(getPermutations([1,2,3]));