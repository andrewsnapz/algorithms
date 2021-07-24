const lengthOfLongestSubstring = (s) => {
  if (s.length < 0) return 0;
  let idx1 = 0;
  let idx2 = idx1 + 1;
  let highestSubstringCount = 0;

  while (idx1 < s.length) {
    let set = new Set();
    set.add(s[idx1]);

    while (idx2 < s.length) {
      if (!set.has(s[idx2])) {
        set.add(s[idx2]);
        idx2++;
      } else {
        break;
      }
    }
    highestSubstringCount = Math.max(highestSubstringCount, set.size);
    idx1++;
    idx2 = idx1 + 1;
  }

  return highestSubstringCount;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // "aba" , 3
console.log(lengthOfLongestSubstring("bbbbbbb")); // "b", 1
console.log(lengthOfLongestSubstring("pwwkew")); // "wke", 3
console.log(lengthOfLongestSubstring("")) // "", 0
console.log(lengthOfLongestSubstring("ab")); // "ab", 2
