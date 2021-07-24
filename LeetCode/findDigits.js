function findDigits(n) {
    let count = 0;
    let numArr = n.toString().split('');
    for (let i=0; i<numArr.length;i++) {
        if (n % parseInt(numArr[i]) === 0) {
            count++;
        }
    }
    return count;
};

console.log(findDigits(12)); // 2
console.log(findDigits(1012)); //3