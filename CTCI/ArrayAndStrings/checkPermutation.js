/*
Check Permutation: Given two strings, write a method to decide 
if one is a permutation of the other. 
*/

const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let obj = {};

  for (let i = 0; i < str1.length; i++) {
    if (!obj[str1[i]]) obj[str1[i]] = 1;
    else obj[str1[i]]++;
  }

  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i]]) obj[str2[i]]--;
  }

  for (char in obj) {
    if (obj[char] > 0) return false;
  }
  return true;
};

console.log(checkPermutation("abc", "bca")); // true;
console.log(checkPermutation("Aasdsadhsauid", "nope")); // false
console.log(checkPermutation("peanutbutter", "butterpeanut")); // true
console.log(checkPermutation("ssA", "sAs")); // true
