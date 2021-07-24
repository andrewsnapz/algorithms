// function threeSum(nums) {
//     //sums up to zero
//     let pairs = [];
//     let sortedArr = nums.sort((a,b) => a - b);
//     for (let i = 0 ; i< sortedArr.length; i++) {
//         let leftPointer = i + 1;
//         let rightPointer = nums.length - 1;
//         const sum = nums[i] + nums[leftPointer] + nums[rightPointer];
//         while (leftPointer < rightPointer) {
//             let potentialArr = [];
//             if (sum === 0) {
//                 potentialArr.push(nums[i], nums[leftPointer], nums[rightPointer]);
//                 if (checkDuplicate(potentialArr, pairs)) {
//                     pairs.push([nums[i], nums[leftPointer], nums[rightPointer]]);
//                 }
//                 leftPointer++;
//                 rightPointer--;
//             } else if (sum < 0) { 
//                 leftPointer++;
//             } else if (sum > 0) { 
//                 rightPointer--;
//             }
//         } 
//     }
//     return pairs;
// };

// const checkDuplicate = (array, pairs) => {
//     let stringArr = JSON.stringify(array);
//     console.log(stringArr)
//     for (let i=0; i < pairs.length; i++) {
//         if (JSON.stringify(pairs[i]) === stringArr) {
//             return false;
//         }
//     }
//     return true;
// };

// const threeSum = nums => {
//     let set = new Set();
//     let sortedNums = nums.sort((a,b) => a-b);
//     for (let i=0; i < sortedNums.length; i++) {
//         let pointer1 = i + 1;
//         let pointer2 = sortedNums.length - 1;
//         const sum = sortedNums[i] + sortedNums[pointer1] + sortedNums[pointer2];
//         while (pointer1 < pointer2) {
//             if (sum === 0) {
//                 set.add([sortedNums[i], sortedNums[pointer1], sortedNums[pointer2]]);
//                 pointer1++;
//                 pointer2--;
//             } else if (sum < 0) {
//                 pointer1++;
//             } else if (sum > 0) {
//                 pointer2--;
//             }
//         }
//     }
//     console.log(set)
// }

var threeSum = function(nums) { 
    nums.sort((a, b) => a - b);    
    let results = [];
    for(let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        
        while(j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                results.push([nums[i], nums[j] ,nums[k]]);
                
                while(j < k && nums[j] == nums[j+1]) {
                    j++;
                }
                j++;
                
                while(k > j && nums[k] == nums[k-1]) {
                    k--;
                }
                k--;
            } else if (sum < 0) {
                j++;
            } else {
                k--;
            }
        }
        
        while(i < nums.length - 1 && nums[i] == nums[i+1]) {
            i++;
        }
    }    
    
    return results;
};

let example = [-1,0,1,2,-1,-4];
let example2 = [0,0,0,0];
console.log(threeSum(example)); 
console.log(threeSum(example2)); //[[0,0,0]]
console.log(threeSum([1,-1,-1,0]))
console.log(threeSum([-2,0,0,2,2]))
/*
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/