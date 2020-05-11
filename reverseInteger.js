function reverse(x) {
    let strArr = reverseString(x.toString().split(''));
    return Math.sign(x) * parseInt(strArr.join(''));
};

const reverseString = s => {
    if (s.length < 0) {
        return [];
    }
    let pointer1 = 0;
    let pointer2 = s.length - 1;
    while (pointer1 <= pointer2) {
        let copy = s[pointer2];
        s[pointer2] = s[pointer1];
        s[pointer1] = copy;
        pointer1++;
        pointer2--;
    };
    return s;
};

console.log(reverse(123)); //321
console.log(reverse(-123)); //-321
console.log(reverse(120)); //21