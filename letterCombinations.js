const letterCombinations = digits => {
    const output = [];
    if (digits.length) {
        const numberChars = {
            '2': ['a','b','b'],
            '3': ['d','e','f'],
            '4': ['g','h','i'],
            '5': ['j','k','l'],
            '6': ['m','n','o'],
            '7': ['p','q','r','s'],
            '8': ['t','u','v'],
            '9': ['w','x','y','z']
        };
        solveDigits(output, numberChars, digits);
    }
    return output;
};

function solveDigits(output, numberChars, digits, selection='') {
    if (!digits.length) {
        output.push(selection);
        return;
    }

    let characters = numberChars[digits[0]];

    for (let i=0 ; i < characters.length; i++) {
        let newSelection = selection + characters[i];
        solveDigits(output, numberChars, digits.slice(1), newSelection);
    }
}

console.log(letterCombinations('23'))