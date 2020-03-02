var rob = function(nums) {
    if (nums.length % 2 === 0) {
        return evenArr(nums);
    }
    return oddArr(nums);
};

function oddArr (nums) {
    let sum1 = 0;
    let sum2 = 0;
    
    for (let i = 0 ; i < nums.length; i = i + 2) {
        sum1 = sum1 + nums[i];
    }
    
    for (let i = 1; i < nums.length; i = i + 2) {
        sum2 = sum2 + nums[i];
    }
    if (sum1 === sum2) {
        if (nums[0] + nums[nums.length - 1] > sum1) {
            return nums[0] + nums[nums.length - 1];
        }
    }
    return Math.max(sum1, sum2); 
}

function evenArr() {
    
}

let input = [2,1,1,2];
let input2 = [1,2,3,4,5];
console.log(rob(input));
console.log(rob(input2));

/*
two pointers at every index?
[2, 1, 1, 2]
*/
