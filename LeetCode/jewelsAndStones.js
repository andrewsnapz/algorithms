var numJewelsInStones = function(J, S) {
    let jSplitted = J.split('');
    let sSplitted = S.split('');
    let cache = {};
    let count = 0;

    for (let i = 0; i < sSplitted.length; i++) {
        if (!cache[sSplitted[i]]) {
            cache[sSplitted[i]] = 1;
        } else {
            cache[sSplitted[i]]++;
        }
    }
    
    for (let i = 0; i < jSplitted.length; i++) {
        for (let key in cache) {
            if (key === jSplitted[i]) {
                count = count + cache[key];
            }
        }
    }
    return count;
};



let J = "aA";
let S = "aAAbbbb";

console.log(numJewelsInStones(J, S))