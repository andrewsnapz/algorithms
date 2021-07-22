/* 
Implement a method to perform basic string compression using the counts 
of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. 
If the "compressed" string would not become smaller than the original string, 
your method should return the original string. You can assume the string 
has only uppercase and lowercase letters (a - z). 
*/

const stringCompression = (str) => {
  if (!str.length) return "";
  let compressedStr = "";
  let currChar = str[0];
  let count = 0;

  let idx = 0;

  while (idx < str.length + 1) {
    if (currChar === str[idx]) {
      count++;
      idx++;
    } else if (currChar !== str[idx]) {
      compressedStr += currChar + count.toString();
      currChar = str[idx];
      count = 1;
      idx++;
    }
  }

  return compressedStr.length > str.length ? str : compressedStr;
};

console.log(stringCompression("aabcccccaaa")); // a2b1c5a3
console.log(stringCompression(["a", "a", "b", "b", "c", "c", "c"])); // a2b2c3
console.log(stringCompression("aaAAbbBBccCC")); // a2A2b2B2c2C2
console.log(stringCompression("aaAAbbBBccCC")); // a2A2b2B2c2C2
