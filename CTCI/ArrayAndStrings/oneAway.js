/* 
There are three types of edits that can be performed 
on strings: insert a character, remove a character, or replace a character. 
Given two strings, write a function to check if they are 
one edit (or zero edits) away.
*/

const oneAway = (str1, str2) => {
  if (str1.length === str2.length) {
    return oneEdit(str1, str2);
  }
  if (str1.length > str2.length || str1.length < str2.length) {
    return removeOrInsert(str1, str2);
  }
};

const oneEdit = (str1, str2) => {
  let count = 0;
  let idx = 0;

  while (idx < str1.length) {
    if (str1[idx] === str2[idx]) {
      idx++;
    } else {
      count++;
      idx++;
    }
  }
  return count > 1 ? false : true;
};

const removeOrInsert = (str1, str2) => {
  let largestStr = str1.length > str2.length ? str1 : str2;
  let smallerStr = str1.length < str2.length ? str1 : str2;
  let count = 0;
  let obj = {};
  for (let i = 0; i < largestStr.length; i++) {
    if (!obj[largestStr[i]]) obj[largestStr[i]] = 1;
    else obj[largestStr[i]]++;
  }
  for (let i = 0; i < smallerStr.length; i++) {
    obj[smallerStr[i]]--;
  }

  for (char in obj) {
    if (obj[char] === 1) count++;
  }
  return count === 1 ? true : false;
};

console.log(oneAway("pale", "ple")); // true
console.log(oneAway("pale", "le")); // false
console.log(oneAway("pales", "pale")); // true
console.log(oneAway("pale", "bale")); // true
console.log(oneAway("pale", "bake")); // false
console.log(oneAway("tale", "sfal")); // false
console.log(oneAway("tale", "tale")); // true
