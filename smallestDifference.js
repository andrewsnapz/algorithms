function smallestDifference(arrayOne, arrayTwo) {
    let sortedArrayOne = arrayOne.sort((a,b) => a - b);
    let sortedArrayTwo = arrayTwo.sort((a,b) => a -b);
    let smallestPair = [];
    let pointer1 = 0;
    let pointer2 = 0;
    let smallest = Infinity;
    let current = Infinity;

    while(pointer1 < arrayOne.length && pointer2 < arrayTwo.length) {
        let firstNum = arrayOne[pointer1];
        let secondNum = arrayTwo[pointer2];
        if (firstNum < secondNum) {
            current = secondNum - firstNum;
            pointer1++;
        } else if (secondNum < firstNum) {
            current = firstNum - secondNum;
            pointer2++;
        } else {
            return [firstNum, secondNum];
        }
        if (smallest > current) {
            smallest = current;
            smallestPair = [firstNum, secondNum];
        }
    }
    return smallestPair;
}

let arrayOne = [-1, 5, 10, 20, 28, 3];
let arrayTwo = [26, 134, 135, 15, 17];

console.log(smallestDifference(arrayOne, arrayTwo)); //[28,26]

