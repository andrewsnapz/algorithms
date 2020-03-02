const topKFrequent = function(words, k) {
    let cache = {};
    let array = [];
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < words.length; i++) {
        if (!cache[words[i]]) {
            cache[words[i]] = 1;
        } else {
            cache[words[i]]++;
        }
    }    
    console.log(cache);
    return helperFunction(cache, k);
}

function helperFunction(cache, k, array = [], biggestCountWord = undefined) {
    for (let word in cache) {
        if (cache[word] < Infinity) {
            array.push(word);
        }
    }

    if (array.length !== k) {
        return helperFunction(cache, k, array);
    } else {
        return array;
    }
}

// let input = ["i", "love", "leetcode", "i", "love", "coding"];
// let k = 2;
// console.log(topKFrequent(input, k));

let input2 = ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"];
let x = 4;
console.log(topKFrequent(input2, x));