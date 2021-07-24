// need to return as a set
function permutaitonsOfWord(word) {
    let permutations = [];
    dfs(word.split(''), [], permutations);
    return permutations;
};

function dfs(word, currentPermutation, permutations) {
    if (!word.length && currentPermutation.length) {
        permutations.push(currentPermutation);
    } else {
        for (let i = 0; i < word.length; i++) {
            let removedElementArr = word.slice(0, i).concat(word.slice(i + 1));
            let newPermutation = currentPermutation.concat([word[i]]);
            dfs(removedElementArr, newPermutation, permutations);
        }
    }
}

console.log(permutaitonsOfWord('cats'));