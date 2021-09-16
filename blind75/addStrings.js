function addStrings(string1, string2) {
  // line up decimals between the two numbers, add zeroes as needed
  let zeroArrObj = decimalLineUp(string1.split(""), string2.split(""));

  // adding arrays
  let results = addingArrays(zeroArrObj.arr1, zeroArrObj.arr2);

  // removing trailing zeroes
  return removeTrailingZeroes(results);
}

function decimalLineUp(arr1, arr2) {
  let decimalIdx1 = arr1.indexOf(".");
  let decimalIdx2 = arr2.indexOf(".");

  let addedZeroesBeforeDecimal =
    Math.max(decimalIdx1, decimalIdx2) - Math.min(decimalIdx1, decimalIdx2);

  for (let i = 0; i < addedZeroesBeforeDecimal; i++) {
    if (decimalIdx1 > decimalIdx2) {
      arr2.unshift("0");
    } else {
      arr1.unshift("0");
    }
  }

  let addedZeroesAfterDecimal =
    Math.max(arr1.length, arr2.length) - Math.min(arr1.length, arr2.length);

  for (let i = 0; i < addedZeroesAfterDecimal; i++) {
    if (arr1.length > arr2.length) {
      arr2.push("0");
    } else {
      arr1.push("0");
    }
  }
  return { arr1, arr2 };
}

function addingArrays(
  arr1,
  arr2,
  result = [],
  remainder = "0",
  idx = arr1.length - 1
) {
  if (result.length >= arr1.length && remainder === "0") {
    return result;
  } else if (result.length >= arr1.length && remainder === "1") {
    result.unshift("1");
    return result;
  }

  let numObj = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  if (arr1[idx] === ".") {
    result.unshift(".");
    return addingArrays(arr1, arr2, result, remainder, (idx = idx - 1));
  }

  let sum = numObj[arr1[idx]] + numObj[arr2[idx]] + numObj[remainder];
  // console.log(`sum: ${sum}`);

  if (sum >= 10) {
    result.unshift(`${sum % 10}`);
    return addingArrays(arr1, arr2, result, (remainder = "1"), (idx = idx - 1));
  } else {
    result.unshift(`${sum}`);
    return addingArrays(arr1, arr2, result, (remainder = "0"), (idx = idx - 1));
  }
}

function removeTrailingZeroes(arr) {
  if (arr[arr.length - 1] === "0") {
    arr.pop();
    return removeTrailingZeroes(arr);
  } else {
    return arr.join("");
  }
}

// return string of their sum
// CANNOT turn the string into numbers
// remove trailing zeroes
// needs to be the same length (put 0s) where needed

console.log(addStrings("3.92", "0.09")); // "4.01"

console.log(addStrings("999.99", "50.2")); // 1050.19

console.log(addStrings("103.00000000909", "0.0000000019101"));

console.log(addStrings("103.0004", "0.000005"));

console.log(
  addStrings("1099.999999999990001", "10000000.000000000000000201000")
);
