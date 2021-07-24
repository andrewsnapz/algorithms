// function insertionSort(array) { 
//     //first, start the index on the first element
//     //check if each element before it, is smaller, if so insert it. If not, leave it.
//     for (let i = 1; i < array.length; i++) {
//         let elementsBeforei = i - 1;
//         while (elementsBeforei !== -1) {
//             if (array[elementsBeforei] > array[i]) { 
//                 elementsBeforei;
//                 let copyOfElementBefore = array[elementsBeforei];
//                 let copyOfElementAti = array[i];
//                 array[i] = copyOfElementBefore;
//                 array[elementsBeforei] = copyOfElementAti;
//                 elementsBeforei--;
//                 console.log(array);
//             } else { 
//                 console.log(array);
//                 elementsBeforei--;
//             }
//         }
//     }
//     return array; 
// }

function insertionSort(array) { 
    for (let i = 1; i < array.length; i++) { 
        let j = i;
        while (j > 0 && array[j] > array[j - 1]) { 
            swap(j, j - 1, array);
            j -=1;
        }
    }
    return array;
}

function swap(i, j, array) { 
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

let unsortedArray = [8,5,2,9,5,6,3];
//[5,8,2,9,5,6,3];
//[5,2,8,9,5,6,3]

console.log(insertionSort(unsortedArray));