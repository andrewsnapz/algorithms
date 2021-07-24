function checkPermutation(str1, str2) {
    if (str1.length !== str2.length) return false;
    let letterCount = {};

    for (let i = 0; i < str1.length; i++) {
        if (!letterCount[str1[i]]) {
            letterCount[str1[i]] = 1;
        } else {
            letterCount[str1[i]]++;
        }
    };

    for (let i = 0; i < str2.length; i++) {
        if (!letterCount[str2[i]]) {
            return false;
        } else {
            letterCount[str2[i]]--;
        }
    }

    for (let key in letterCount) {
        if (letterCount[key] !== 0) return false;
    };

    return true;
};

console.log(checkPermutation("god   ", "dog")); // false;
console.log(checkPermutation("dog", "god")); // true;
console.log(checkPermutation("God", "dOg")); // false;