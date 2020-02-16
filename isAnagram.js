var isAnagram = function(s, t) {
    let storage = {};
    
    if (s === t) {
    return true;
}

    for (let i = 0; i < s.length; i++) {
        if (!storage[s[i]]) { 
            storage[s[i]] = 1;
        } else { 
            storage[s[i]]++;
        }
    }
    
    for (let x = 0; x < t.length; x++) { 
        if (storage[t[x]]) { 
            storage[t[x]]--;
        } else if (!storage[t[x]]){ 
            return false;
        }
    }
    
    for (let letters in storage) { 
        if (storage[letters] !== 0) { 
            return false;
        } else { 
            return true;
        }
    }
}


let x = "a"
let y = "ab";

console.log(isAnagram(x, y));