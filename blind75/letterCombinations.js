const L = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz",
};

function letterCombinations(digits) {
  // input: String of numbers
  // output: array of strings

  let length = digits.length;
  let ans = [];

  if (!length) return [];

  function bfs(pos, str) {
    if (pos === length) ans.push(str);
    else {
      let letters = L[digits[pos]];
      for (let i = 0; i < letters.length; i++) {
        bfs(pos + 1, str + letters[i]);
      }
    }
  }
  bfs(0, "");
  return ans;
}

console.log(letterCombinations("23"));
//  ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// [a,b,c], [d,e,f]
