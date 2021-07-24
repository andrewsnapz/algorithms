function lengthOfLongestSubstring(s) {
    let arr = [];
    let maxStr = 0;
    for (let i = 0; i < s.length; i++) {
        if (arr.indexOf(s[i]) === -1) {
            arr.push(s[i]);
        } 
        if (arr.length > maxStr) {
            maxStr = arr.length;
        }
        if (arr.indexOf(s[i]) !== 1) {
            arr = arr.slice(arr.indexOf(s[i]) + 1);
        }
        if (arr.length > maxStr) {
            maxStr = arr.length;
            arr.push(s[i]);
        }
    }
    return maxStr;
}

console.log(lengthOfLongestSubstring(""))