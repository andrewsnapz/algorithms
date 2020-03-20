function groupAnagrams(strs, list = []) {
    let cache = {};
    let pointer = 0;
    for (let i = 0; i < strs[0].length; i++) {
        if (!cache[strs[0][i]]) {
            cache[strs[0][i]] = 1;
        } else {
            cache[strs[0][i]]++;
        }
    }
    
}

let input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input)); 
/*
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/ 