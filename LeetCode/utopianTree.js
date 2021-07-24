const utopianTree = (n, growth=1) => {
    // if even or 0, add 1
    // if odd double
    if (n === 0) return growth;
    let nMinusOne = n - 1;
    if (n % 2 !== 0) growth = growth * 2;
    if (n % 2 === 0) growth++;
    console.log(`this is n: ${n}, this is growth: ${growth}`)
    if (n !== 0) return utopianTree(nMinusOne, growth);
};

// console.log(utopianTree(5)) // 14
// console.log(utopianTree(1)) // 2
// console.log(utopianTree(0)) // 1
console.log(utopianTree(4)) // 7
// eh