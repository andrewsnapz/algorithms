function lengthOfLIS(nums) {
  if (!nums.length) return 0;
  let longestLIS = 1;
  for (let i = 0; i < nums.length; i++) {
    longestLIS = Math.max(
      gettingLength(nums[i], nums.slice(i + 1, nums.length)),
      longestLIS
    );
  }
  return longestLIS;
}

// function gettingLength(curr, arr, count = 1) {
//   console.log(`curr: ${curr}`);
//   console.log(`arr: ${arr}`);
//   console.log(`count:${count}`);
//   console.log(`=================================================`);

//   for (let i = 0; i < arr.length; i++) {
//     if (curr < arr[i]) {
//       console.log(`${curr} < ${arr[i]}`);
//       return gettingLength(
//         arr[i],
//         arr.slice(i + 1, arr.length),
//         (count = count + 1)
//       );
//     }
//   }
//   return count;
// }

function gettingLength(curr, arr, count = 1) {
    console.log(`curr: ${curr}`);
    console.log(`arr: ${arr}`);
    console.log(`count:${count}`);
    console.log(`=================================================`);
  let pointer = 0;
  while (pointer < arr.length) {
    if (curr < arr[pointer]) {
      return gettingLength(
        arr[pointer],
        arr.slice(pointer + 1, arr.length),
        (count = count + 1)
      );
    }
    pointer++;
  }
  return count;
}

//input array of nums
//output length of longest subseq.

// console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // return 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); // return 4
// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); // return 1
