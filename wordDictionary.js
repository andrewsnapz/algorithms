function WordDictionary() {
    this.set = new Set();
}

WordDictionary.prototype.addWord = function(word) {
    if (!this.set.has(word)) this.set.add(word);
    return word;
};

WordDictionary.prototype.search = function(word) {
    let updatedWord = word.replace(/\./g, '');
    let arrFromSet = Array.from(this.set);
    for (let i = 0; i < arrFromSet.length; i++) {
        if (arrFromSet[i].includes(updatedWord) && word.length === arrFromSet[i].length) return true;
    }
    return false;
}

let set = new WordDictionary();
console.log(set.addWord('a'));
console.log(set.addWord('ab'));
console.log(set.addWord('a'));
// console.log(set.search('dad'));
// console.log(set.search('.ad'));
// console.log(set.search('sad'));
console.log(set.search('a.'));
console.log(set.search('ab'));
console.log(set.search('.a'));
console.log(set.search('.b'));
