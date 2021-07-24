// function findArrayQuadruplet(arr, s) {
//     let sortedArr = arr.sort((a,b) => a - b);
//     let quadArr = [];
//     let idx1 = 0;
//     let idx2 = idx1 + 1;
//     let idx4 = arr.length - 1;
//     let idx3 = idx4 - 1;

//     while (idx1 < idx4) {
//         let possibleSum = sortedArr[idx1] + sortedArr[idx2] + sortedArr[idx3] + sortedArr[idx4];
//         while (idx2 < idx3) {
//             if (possibleSum > s) {
//                 idx3--;
//             } else if (possibleSum < s) {
//                 idx2++;
//             } else if (possibleSum === s) {
//                 quadArr.push(sortedArr[idx1], sortedArr[idx2], sortedArr[idx3], sortedArr[idx4]);
//                 return quadArr.sort((a,b) => a - b);
//             }
//         }
//         idx1++;
//         idx4--;
//         idx2 = idx1 + 1;
//         idx3 = idx4 - 1;
//         console.log("this is idx1: ", idx1);
//         console.log("this is idx2: ", idx2);
//         console.log("this is idx3: ", idx3);
//         console.log("this is idx4 ", idx4);
//     }
//     return quadArr;
// };

function findArrayQuadruplet(arr, s) {
    let quadArrs = [];
    let sortedArr = arr.sort((a,b) => a - b);

    for (let i=0; i < sortedArr.length; i++) {
        let pointer1 = i + 1;
        let pointer2 = pointer1 + 1;
        let pointer3 = sortedArr.length - 1;
        let possibleSum = sortedArr[i] + sortedArr[pointer1] + sortedArr[pointer2] + sortedArr[pointer3];
        while(pointer1 < pointer2) {
            while(pointer2 < pointer3) {
                if (possibleSum === s) {
                    quadArrs.push([sortedArr[i], sortedArr[pointer1], sortedArr[pointer2], sortedArr[pointer3]]);
                    break;
                }
                if (possibleSum < s) {
                    console.log(` i: ${i}, pointer1: ${pointer1}, pointer2: ${pointer2}, pointer3: ${pointer3}`)
                    pointer2++;
                } else if (possibleSum > s) {
                    console.log(` i: ${i}, pointer1: ${pointer1}, pointer2: ${pointer2}, pointer3: ${pointer3}`)
                    pointer3--;
                }
            }
            pointer1++;
        }
    }
    return quadArrs;
};

console.log(findArrayQuadruplet([2,7,4,0,9,5,1,3], 20)); // [0, 4, 7, 9]