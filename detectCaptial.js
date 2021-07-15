const detectCapitalUse = (word) => {
  if (word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90) {
    return firstLetterCaptial(word);
  } else {
    return noCaptials(word);
  }
};

const noCaptials = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const allCapitals = (word) => {
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const firstLetterCaptial = (word) => {
  for (let i = 1; i < word.length; i++) {
    if (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122) {
      continue;
    } else {
      return allCapitals(word);
    }
  }
  return true;
};

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("FlaG"));
console.log(detectCapitalUse("Google"));
// console.log(detectCapitalUse("G"));
