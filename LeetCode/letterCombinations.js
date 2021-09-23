const numObj = {
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
  if (!digits.length) return [];
  let answer = [];

  function dfs(idx, string) {
    if (digits.length === string.length) {
      answer.push(string);
    } else {
      let letters = numObj[digits[idx]];
      for (let i = 0; i < letters.length; i++) {
        dfs(idx + 1, string + letters[i]);
      }
    }
  }

  dfs(0, "");
  return answer;
}

console.log(letterCombinations("23"));
console.log(letterCombinations("246"));
