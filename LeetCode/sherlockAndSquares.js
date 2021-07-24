function squares(a,b) {
    let squareIntArr = [];
    let rangeArr = [];
    for (let i=a; i < b + 1; i++) {
        rangeArr.push(i);
    }

    for (let i=0; i < rangeArr.length; i++) {
        if (Number.isInteger(Math.sqrt(rangeArr[i]))) {
            squareIntArr.push(rangeArr[i]);
        }
    }
    console.log(squareIntArr)
    return squareIntArr.length;
}

// console.log(squares(24, 49)) // 3
// console.log(squares(17, 24)) // 0
// console.log(squares(3, 9)) // 2
console.log(squares(1 , 1000000000));