function URLify(string, trueLength) {
    let index = 0;
    let stringArr = string.trim().split("");
    let whitespaceObj = {}; // key = index, value = count;
    let whitespaceCount = 0;
    let whitespaceIndex;
    let pattern = "%20";

    while (index < stringArr.length) {
        if (stringArr[index] !== " ") {
            if (whitespaceIndex) {
                whitespaceObj[whitespaceIndex] = whitespaceCount;
            }
            whitespaceIndex = undefined;
            whitespaceCount = 0;
            index++;
        } else {
            if (!whitespaceIndex) whitespaceIndex = index;
            whitespaceCount++;
            index++;
        }
    }
    
    for (let key in whitespaceObj) {
        stringArr.splice(key, whitespaceObj[key], pattern);
    }

    return stringArr.join("");
}

console.log(URLify("Mr John Smith    ")) // Mr%20John%20Smith
// console.log(URLify("  Hadoken   Shoryuken    SonicBoom"))