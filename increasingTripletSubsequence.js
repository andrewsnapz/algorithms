// const increasingTriplet = nums => {
//     let pointer1 = 0;
//     let pointer2 = pointer1 + 1;
//     let pointer3 = pointer2 + 1;

//     while(pointer3 < nums.length) {
//         if (nums[pointer1] < nums[pointer2] && nums[pointer2] < nums[pointer3]) return true;
//         pointer1++;
//         pointer2++;
//         pointer3++;
//     }
//     return false;
// };

const increasingTriplet = nums => {
    let first, second;
    for (let n of nums) {
        if (n > second) return true;
        if (n > first) second = n;
        else first = n;
    }
    return false;
};

// console.log(increasingTriplet([1,2,3,4,5]));
console.log(increasingTriplet([5,4,3,2,1])); // false
// console.log(increasingTriplet([5,1,5,5,2,5,4])); // true