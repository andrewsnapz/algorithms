/*
Is Unique: Implement an algorithm to determine if a string has all unique characters. 
What if you cannot use additional data structures? 
*/
const isUnique = (str) => {
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      return false;
    } else {
      set.add(str[i]);
    }
  }
  return true;
};

console.log(isUnique("abc")); // true
console.log(isUnique("AABbCc")); // false
console.log(isUnique("tT")); // true;
console.log(isUnique("SoIaZsRere")); // false
