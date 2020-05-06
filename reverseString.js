// const reverseString = s => {
//     return s.reverse();
// };

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

console.log(reverseString(["h","e","l","l","o"]));