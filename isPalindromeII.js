const isPalindromeII = s => {
    if (s === '') return true;
    let sArr = s.split('');
    let pointer1 = 0;
    let pointer2 = sArr.length - 1;
    while (pointer1 < pointer2) {
        if (sArr[pointer1] === sArr[pointer2]) {
            pointer1++;
            pointer2--;
        }
        if (sArr[pointer1] !== sArr[pointer2]) {
            newStringCheck(sArr.splice(pointer1, 1));
            return newStringCheck(sArr.splice(pointer2, 1));
        }
    }
    return true;
};

const newStringCheck = s => {
    let pointer1 = 0;
    let pointer2 = s.length - 1;
    console.log(s)
    while (pointer1 < pointer2) {
        if (s[pointer1] === s[pointer2]) {
            pointer1++;
            pointer2--;
        } else {
            return false;
        }
    }
    return true;
};

console.log(isPalindromeII('aba')) // true
console.log(isPalindromeII('abca')) // true
console.log(isPalindromeII('racecaryourmama')) // false