const isHappy = (n, resultArr = []) => {
    //numbers that are not happy repeat results that go into an endless loop
    //cache results, check for repeats, if there is any, return false
    //check results, if number is 1 return true
    let numArr = n.toString().split('')
    let result = 0;
    for (let i = 0; i < numArr.length; i++) {
        result += parseInt(numArr[i], 10) ** 2;
    }

    if (result === 1) {
        return true;
    } else if (!resultArr.includes(result)) {
        resultArr.push(result);
        return isHappy(result, resultArr);
    } else {
        return false;
    }
}

console.log(isHappy(20));
console.log(isHappy(7));