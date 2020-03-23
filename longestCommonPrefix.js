function longestCommonPrefix(strs) {
    let prefix = [];
    for (let i = 0; i < strs.length; i++) {
        let longestWord = strs[0];
        if (longestWord.length < strs[i].length) {
            longestWord = strs[i].length;
        }

        let index = 0;
        while (index < longestWord) {
            console.log("i am in the while loop")
            let letter = strs[i][index];
            if (letter === strs[i][index]) {
                prefix.push(letter);
                index++;
            } else {
                break;
            }
        }
    }
    return prefix;
}

console.log(longestCommonPrefix(["flowers", "flow", "flight"]));
//Output: "fl"