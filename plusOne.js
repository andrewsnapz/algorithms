// function plusOne(digits) {
//     if (digits[digits.length - 1] !== 9) {
//         digits[digits.length - 1]++;
//         return digits;
//     };
//     let indexChecker = 2;
//     while(indexChecker !== digits.length) {
//         if (digits[digits.length - indexChecker] !== 9) {

//         }
//     }
// };

function plusOne(digits) {
    if (digits.length === 0) {
        return [];
    }

    if (digits[digits.length - 1] !== 9) {
        digits[digits.length - 1]++;
        return digits;
    }

    let index = 1;
    while (digits.length - index !== digits.length) {
        if (digits[digits.length - index] === 9 && digits.length - index !== 0) {
            digits[digits.length - index] = 0;
            index++;
        } 

        if (digits[digits.length - index] === 9 && digits.length - index === 0 && digits[0]!== 9) {
            digits[0] = digits[0]++;
            return digits;
        }

        if (digits[digits.length - index] === 9 && digits.length - index === 0 && digits[0] === 9) {
            digits[0] = 1;
            digits.push(0);
            return digits;
        }

        if (digits[digits.length - index] !== 9) {
            digits[digits.length - index]++;
            return digits;
        }
    }
}

console.log(plusOne([4,3,2,1])); //[4,3,2,2];
console.log(plusOne([4,5,9,9])); //[4,6,0,0];
console.log(plusOne([4,9,9,9])); //[5,0,0,0];
console.log(plusOne([9,9,9,9])); //[1,0,0,0,0];