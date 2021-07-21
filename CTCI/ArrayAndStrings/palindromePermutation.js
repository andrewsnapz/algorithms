/* 
Given a string, write a function to check if it is a permutation 
of a palindrome. A palindrome is a word or phrase that is the same 
forwards and backwards. A permutation is a rearrangement of letters. 
The palindrome does not need to be limited to just dictionary words.
*/

const palindromePermutation = (str) => {
  str = str.replace(/ /g, "").toLowerCase();
  let set = new Set();
  for (let i = 0; i < str.length; i++) {
    if (!set.has(str[i])) {
      set.add(str[i]);
    } else if (set.has(str[i])) {
      set.delete(str[i]);
    }
  }

  if (str.length % 2 !== 0) {
    return set.size === 1 ? true : false;
  }

  if (str.length % 2 === 0) {
    return set.size === 0 ? true : false;
  }
};

console.log(palindromePermutation("Tact Coa")); // true;
console.log(palindromePermutation("racecari")); // false;
console.log(palindromePermutation("Hnaanh")); // true;
