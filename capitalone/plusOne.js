// https://leetcode.com/problems/plus-one

// input: array
// output: array
// first attempt: join the array, turn the num into a string, addone, turn it back to an array.
// if the integer is too big, doesn't work due to scientific notation
//   console.log((Number.parseInt(digits.join("")) + 1).toString().split(""));
// attempt two, add one to the last element in array, check if the num is 10, if it is, add one to the num before it

const plusOne = (digits, checkElement = 1) => {
  digits[digits.length - checkElement]++;

  if (
    digits[digits.length - checkElement] === 10 &&
    checkElement !== digits.length
  ) {
    digits[digits.length - checkElement] = 0;
    return plusOne(digits, (checkElement = checkElement + 1));
  } else if (
    digits[digits.length - checkElement] === 10 &&
    checkElement === digits.length
  ) {
    digits[0] = 0;
    digits.unshift(1);
  }

  return digits;
};

// console.log(plusOne([1, 2, 3])); // [1,2,4];
// console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2];
// console.log(plusOne([1, 2, 9])); // [1,3,0];
// console.log(plusOne([1, 2, 9, 9])); // [1,3,0,0];
console.log(plusOne([9, 9, 9])); // [1,0,0,0];
