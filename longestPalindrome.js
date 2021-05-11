const longestPalindrome = (s) => {
  if (s.length < 0 || s.length === 1) return s;
  let palindromeArr = s.split("");
  let longestPalindrome = palindromeArr[0];
  let pt1 = 0;
  let pt2 = palindromeArr.length - 1;

  while (pt1 < palindromeArr.length) {
    if (palindromeArr[pt1] === palindromeArr[pt2] && pt1 !== pt2) {
      let potentialPalindrome = palindromeCheck(
        palindromeArr.slice(pt1, pt2 + 1)
      );

      if (
        potentialPalindrome &&
        longestPalindrome.length < palindromeArr.slice(pt1, pt2 + 1).length
      ) {
        longestPalindrome = palindromeArr.slice(pt1, pt2 + 1).join("");
      }
    }

    if (pt1 < pt2) {
      pt2--;
    } else {
      pt1++;
      pt2 = palindromeArr.length - 1;
    }
  }
  return longestPalindrome;
};

const palindromeCheck = (arr) => {
  let pt1 = 0;
  let pt2 = arr.length - 1;

  while (pt1 < pt2) {
    if (arr[pt1] === arr[pt2]) {
      pt1++;
      pt2--;
    } else {
      return false;
    }
  }
  return true;
};

// console.log(longestPalindrome("babad")); // "aba" or "bab"
// console.log(longestPalindrome("racecar"));
// console.log(longestPalindrome("bbb"));
console.log(longestPalindrome("ac"));
