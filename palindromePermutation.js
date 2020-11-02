function palindromePermutation(string) {
    if (!string) return true;
    let noSapceString = string.toLowerCase().split(" ").join("");
    let letterCount = {};
    let oddCount = 0;

    for (let i = 0; i < noSapceString.length; i++) {
        if (!letterCount[noSapceString[i]]) letterCount[noSapceString[i]] = 1;
        else letterCount[noSapceString[i]]++;
    };

    for (let key in letterCount) {
        if (letterCount[key] % 2 !== 0) oddCount++;
    };

    if (oddCount > 1) return false;
    return true;
}

console.log(palindromePermutation("Tact Coa")) // true
console.log(palindromePermutation("hh a an n")) // true
console.log(palindromePermutation("ra c acer")); // true
console.log(palindromePermutation("racecarizys")) // false
// hannah
// racecar