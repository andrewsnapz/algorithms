function oneAway(string1, string2) {
    if (string1 === string2) return true;
    if (string1.length !== string2.length) return insertAndDeleteCheck(string1, string2);
    if (string1.length === string2.length) return replaceCheck(string1, string2);
}


function insertAndDeleteCheck(string1, string2) {
    let charCount = {};
    let deleteCount = 0;
    for (let i = 0; i < string1.length; i++) {
        if (!charCount[string1[i]]) charCount[string1[i]] = 1;
        else charCount[string1[i]]++;
    };

    for (let i = 0; i < string2.length; i++) {
        if (!charCount[string2[i]]) charCount[string2[i]] = 1;
        else charCount[string2[i]]--;
    };

    for (let key in charCount) {
        if (charCount[key] > 0) deleteCount++;
    };

    if (deleteCount > 1) return false;
    return true;
};

function replaceCheck(string1, string2) {
    let charCount = {};
    let replaceCheck = 0;
    for (let i = 0; i < string1.length; i++) {
        if (!charCount[string1[i]]) charCount[string1[i]] = 1;
        else charCount[string1[i]]++;
    };

    for (let i = 0; i < string2.length; i++) {
        if (!charCount[string2[i]]) charCount[string2[i]] = 1;
        else charCount[string2[i]]--;
    };

    for (let key in charCount) {
        if (charCount[key] > 0) replaceCheck++;
    };

    if (replaceCheck !== 2) return false;
    return true;
}

console.log(oneAway("pale","ple")) // true
console.log(oneAway("pales", "pale")) // true
console.log(oneAway("pale", "bale")) // true
console.log(oneAway("pale", "bake")) // false
// insert, delete, replace
// one edit or zero edits away