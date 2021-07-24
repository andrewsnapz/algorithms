function repeatedString(s, n) {
    let pointer = 0;
    let aCount = 0;
    if (s === 'a') {
        return n;
    }
    while(n > 0) {
        if (pointer === s.length) {
            pointer = 0;
        }
        if (s[pointer] === 'a') {
            aCount++;
        }
        pointer++;
        n = n - 1;
        console.log(n)
    }
    return aCount;
}

// n = integer
// s = string that will be repeated n times

// console.log(repeatedString('aba', 10));
console.log(repeatedString('a', 1000000000000));