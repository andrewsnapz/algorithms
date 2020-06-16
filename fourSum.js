const fourSum = (nums, target) => {
    nums.sort((a,b) => a - b);
    const result = [];
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i + 1; j < nums.length - 2; j++) {
            let left = j + 1;
            let right = nums.length - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    while(nums[left] === nums[left + 1]) left++;
                    while(nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                }
            }
            while(nums[j] === nums[j + 1]) j++;
        }
        while(nums[i] === nums[i + 1]) i++;
    }
    return result;
};

// var fourSum = function(nums, target) {
//     nums.sort((a, b) => a - b);
//     const result = []
    
//     for(let i = 0; i < nums.length - 3; i++) {
//         for(let j = i + 1; j < nums.length - 2; j++) {
//             let low = j + 1;
//             let high = nums.length - 1

//             while(low < high) {
//                 const sum = nums[i] + nums[j] + nums[low] + nums[high];
//                 if(sum === target) {
//                     result.push([nums[i], nums[j], nums[low], nums[high]])
//                     while(nums[low] === nums[low + 1]) low++;
//                     while(nums[high] === nums[high - 1]) high--;
//                     low++;
//                     high--;
//                 } else if(sum < target) {
//                     low++
//                 } else {
//                     high--
//                 }
//             }   
//             while(nums[j] === nums[j + 1]) j++;
//         }   
//         while(nums[i] === nums[i + 1]) i++;
//     }
//     return result
// };

console.log(fourSum([1,0,-1,0,-2,2], 0));