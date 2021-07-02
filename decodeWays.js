const numDecodings = (s, count = 0) => {
  let sArr = s.split("").map((x) => parseInt(x, 10));
  console.log(sArr);
  let pt1 = 0;
  let pt2 = pt1 + 1;
  while(pt1 < s.length) {
      if (s[pt1])
  }
};

// questions to ask:
// could the string not exist? (i.e. 0000)
// only captial letters?

// is the numberStr even or odd?
//ASCII: A(65) - Z(90)

console.log(numDecodings("12")); // 2
