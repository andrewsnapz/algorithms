const stringShift = (s, shift) => {
    let shiftCount = 0;
    let sArr = s.split('');
    for (let i = 0; i < shift.length; i++) {
        if (shift[i][0] === 0) {
            shiftCount = shiftCount - shift[i][1];
        } else if (shift[i][0] === 1) {
            shiftCount = shiftCount + shift[i][1];
        }
    }

    if (Math.abs(shiftCount) > sArr.length) {
        shiftCount = intoRange(sArr, Math.abs(shiftCount)) * Math.sign(shiftCount);
    }

    if (shiftCount < 0) {
        let shiftIndex = Math.abs(shiftCount);
        let shiftedElements = sArr.splice(0, shiftIndex);
        return sArr.concat(shiftedElements).join('');
    } else if (shiftCount > 0) {
        let shiftedIndex = Math.abs(sArr.length - shiftCount);
        let shiftedElements = sArr.splice(shiftedIndex, shiftCount);
        return shiftedElements.concat(sArr).join('');
    }
};

const intoRange = (sArr, shiftCount) => {
    let length = sArr.length;
    let newCount = shiftCount - length;
    if (newCount > length) {
        return intoRange(sArr, newCount);
    }
    return newCount;
}

// let s1 = "abc";
// let shift1 = [[0,1], [1,2]];
// console.log(stringShift(s1, shift1)); // "cab"

// let s2= "abcdefg";
// let shift2 = [[1,1], [1,1], [0,2], [1,3]];
// console.log(stringShift(s2, shift2)); // "efgabcd"

// let s3 = "wpdhhcj";
// let shift3 = [[0,7],[1,7],[1,0],[1,3],[0,3],[0,6],[1,2]];
// console.log(stringShift(s3, shift3)); // "hcjwpdh"

let s4 = "xqgwkiqpif";
let shift4 =  [[1,4],[0,7],[0,8],[0,7],[0,6],[1,3],[0,1],[1,7],[0,5],[0,6]];
console.log(stringShift(s4, shift4)); // "qpifxqgwki"