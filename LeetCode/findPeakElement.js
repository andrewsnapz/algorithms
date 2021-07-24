const findPeakElement = nums => {
    let pointer1 = -1;
    let pointer2 = 0;
    let pointer3 = 1;

    while (pointer2 < nums.length) {
        if (nums[pointer1] === undefined && nums[pointer3] === undefined) return pointer2;
        if (nums[pointer1] === undefined && nums[pointer2] > nums[pointer3]) return pointer2; 
        if (nums[pointer3] === undefined && nums[pointer2] > nums[pointer1]) return pointer2; 
        if (nums[pointer2] > nums[pointer1] && nums[pointer2] > nums[pointer3]) return pointer2;
        pointer1++;
        pointer2++;
        pointer3++;
    }
};

console.log(findPeakElement([1,2,3,1])); // 2
console.log(findPeakElement([1,2,1,3,5,6,4])) // 1 or 5
console.log(findPeakElement([3,2,1])) // 0
