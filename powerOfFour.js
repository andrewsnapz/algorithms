function isPowerOfFour(num) {
    return Number.isInteger(Math.log(num) / Math.log(4));
}

console.log(isPowerOfFour(16));
console.log(isPowerOfFour(5));
console.log(isPowerOfFour(0));
