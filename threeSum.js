function threeSum(nums) {
    //sums up to zero
    let pairs = [];
    let sortedArr = nums.sort((a,b) => a - b);

    for (let i = 0 ; i< nums.length; i++) {
        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;
        const sum = nums[i] + nums[leftPointer] + nums[rightPointer];
        while (leftPointer < rightPointer) {
            if (sum === 0) {
                pairs.push([nums[i], nums[leftPointer], nums[rightPointer]]);
                leftPointer++;
                rightPointer--;
            } else if (sum < 0) { 
                leftPointer++;
            } else if (sum > 0) { 
                rightPointer--;
            }
        } 
    }
    return pairs;
} 

let example = [-1,0,1,2,-1,-4];
let example2 = [0,0,0,0];
console.log(threeSum(example)); 
console.log(threeSum(example2)); //[[0,0,0]]
/*
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/