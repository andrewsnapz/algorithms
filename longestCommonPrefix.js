// function longestCommonPrefix(strs) {
//     let prefix = [];
//     for (let i = 0; i < strs.length; i++) {
//         let longestWord = strs[0];
//         if (longestWord.length < strs[i].length) {
//             longestWord = strs[i].length;
//         }

//         let index = 0;
//         while (index < longestWord) {
//             console.log("i am in the while loop")
//             let letter = strs[i][index];
//             if (letter === strs[i][index]) {
//                 prefix.push(letter);
//                 index++;
//             } else {
//                 break;
//             }
//         }
//     }
//     return prefix;
// }

// const longestCommonPrefix = strs => {
//     let shortestIdx = strs[0].length;
//     let prefix = "";
//     for (let i = 1; i < strs.length; i++) {
//         if (shortestIdx > strs[i].length) {
//             shortestIdx = strs[i].length;
//         }
//     }

//     for (let i = 0; i < strs.length; i++) {
//         for (let x = 0; x < shortestIdx; x++) {
//             if (strs[i][x]) {

//             }
//         }
//     }
// };

const longestCommonPrefix = function(strs) {
    if (!strs[0]) return '';
    let result = '';
    for (let j = 0; strs[0][j] !== undefined; j++) {
      for (let i = 1; i < strs.length; i++) {
        if (strs[i - 1][j] !== strs[i][j]) return result;
      }
      result += strs[0][j];
    }
    return result;
  };

console.log(longestCommonPrefix(["flowers", "flow", "flight"]));
//Output: "fl"