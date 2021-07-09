const numDecodings = (s, i = 0, memo = {}) => {
  if (i in memo) return memo[i];
  if (s[i] === "0") return 0;
  if (i >= s.length - 1) return 1;
  memo[i] =
    numDecodings(s, i + 1, memo) +
    (s[i] + s[i + 1] < 27 ? numDecodings(s, i + 2, memo) : 0);
  return memo[i];
};

// questions to ask:
// could the string not exist? (i.e. 0000)
// only captial letters?

// is the numberStr even or odd?
//ASCII: A(65) - Z(90)
// adding functions?

console.log(numDecodings("12")); // 2
console.log(numDecodings("123")); // 3
