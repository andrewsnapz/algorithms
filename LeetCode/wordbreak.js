var wordBreak = function(s, wordDict) {
    function wordChecker(s, wordDict) {
        if (!wordDict.length) return true;
        let wordFromDict = wordDict[0];

        if (s.includes(wordFromDict)) {
            wordDict.shift();
            return wordChecker(s.replace(wordFromDict, ''), wordDict);
        } else {
            return false;
        }
    };
    return wordChecker(s, wordDict);
};

console.log(wordBreak("applepenapple", ["apple", "pen"])); //true
console.log(wordBreak("catsanddog", ["cats", "dog", "sand", "and", "cat"])); //false