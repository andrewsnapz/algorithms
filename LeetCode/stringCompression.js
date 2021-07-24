function stringCompression(string) {
    let compressedString = [];
    let pointer = 0;
    let currentChar = string[0];
    let charCount = 0;

    while (pointer <= string.length) {
        if (currentChar !== string[pointer]) {
            compressedString.push(currentChar, charCount);
            currentChar = string[pointer];
            charCount = 1;
        } else if (currentChar === string[pointer]) {
            charCount++;
        }
        pointer++;
    }
    if (compressedString.join("").length < string.length) return compressedString.join("");
    return string;
}

console.log(stringCompression("aabcccccaaa")) //a2b1c5a3
console.log(stringCompression("ABBBbbZzzYYy")) // ABBBbbZzzYYy