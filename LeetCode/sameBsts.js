// function sameBsts(arrayOne, arrayTwo) {
//     //loop through arrayOne, seperate the values of those that are less than the first element and those that are more into an array.
//     //do the same for arrayTwo.
//     //check for the edgecase:
//     //shift, seperate arrays by the first element
//     let valuesBiggerThanRootFromArrayOne = [];
//     let valuesSmallerThanRootFromArrayOne = [];
//     let valuesBiggerThanRootFromArrayTwo = [];
//     let valuesSmallerThanRootFromArrayTwo = [];
    
//     for (let i = 1; i < arrayOne.length; i++) {
//         if (arrayOne[0] <= arrayOne[i]) { 
//             valuesBiggerThanRootFromArrayOne.push(arrayOne[i]);
//         } else if (arrayOne[0] > arrayOne[i]) { 
//             valuesSmallerThanRootFromArrayOne.push(arrayOne[i]);
//         }
//     }

//     for (let i = 1; i < arrayTwo.length; i++) {
//         if (arrayTwo[0] <= arrayTwo[i]) { 
//             valuesBiggerThanRootFromArrayTwo.push(arrayTwo[i]);
//         } else if (arrayTwo[0] > arrayTwo[i]) { 
//             valuesSmallerThanRootFromArrayTwo.push(arrayTwo[i]);
//         }
//     }
//     console.log(valuesBiggerThanRootFromArrayOne);
//     console.log(valuesBiggerThanRootFromArrayTwo);
//     console.log(valuesSmallerThanRootFromArrayOne);
//     console.log(valuesSmallerThanRootFromArrayTwo);
// }

function sameBsts(arrayOne, arrayTwo) { 
    //first check if the first element is the same in both arrays (rootNode)
    //Seperate elements by their values, those less than the root and those greater than the root
    
}

let array1 = [10,15,8,12,94,81,5,2,11];
let array2 = [10,8,5,15,2,12,11,94,81];
console.log(sameBsts(array1, array2));
