function largestNumber(nums) {
    nums = nums.sort();
    let numObj = {};
    let numStr = "";
    for (let i = 0; i < nums.length; i++) {
        divisibleBy(nums[i], numObj);
    }
    for (let key in numObj) {
        numStr = numStr + numObj[key].reverse().join('');
    }
    console.log(numStr)
    return numStr;
}

function divisibleBy(num, numObj, divisible = 10, digit = 1) {
    if (num / divisible <= 1) {
        if (!numObj[digit]) {
            numObj[digit] = [];
            numObj[digit].push(num);
            return
        } else {
            numObj[digit].push(num);
            return
        }
    } else {
        return divisibleBy(num, numObj, divisible * 10, digit + 1);
    }
}

console.log(largestNumber([3,30,34,5,9])); // 9534330