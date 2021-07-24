// function intersect(nums1, nums2) {
//   let intersectingArr = [];
//   let longerArr;
//   let shorterArr;
//   if (nums1.length >= nums2.length) {
//     longerArr = nums1;
//     shorterArr = nums2;
//   } else {
//     longerArr = nums2;
//     shorterArr = nums1;
//   }

//   for (let i = 0; i < longerArr.length; i++) {
//     if (longerArr[i] === shorterArr[0]) {
//       let potentialIntersectingArr = helperFunction(
//         longerArr.slice(i),
//         shorterArr
//       );
//       if (potentialIntersectingArr.length > intersectingArr.length) {
//         intersectingArr = potentialIntersectingArr;
//       }
//     }
//   }
//   return intersectingArr;
// }

// function helperFunction(nums1, nums2) {
//   let pointer1 = 0;
//   let pointer2 = 0;
//   let potentialIntersectingArr = [];
//   while (pointer1 < nums1.length) {
//     if (nums1[pointer1] === nums2[pointer2]) {
//       potentialIntersectingArr.push(nums2[pointer2]);
//       pointer1++;
//       pointer2++;
//     } else {
//       break;
//     }
//   }
//   return potentialIntersectingArr;
// }

var intersect = function (nums1, nums2) {
  let map = new Map();
  let res = [];
  for (let item of nums1) {
    map[item] = ++map[item] || 1;
  }

  for (let item of nums2) {
    if (map[item] > 0) {
      res.push(item);
      map[item]--;
    }
  }
  return res;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]
// console.log(intersect([2, 1], [1, 1])); // [1]
console.log(intersect([1,2],[2,1])); // [2,1]

// iterate through on array and compare it the first element of the second array
// if there is a match, iterate through the first and second array to see how many are matching
// keep track, in a variable, the biggest matching number of elements in both arrays
// return variable
