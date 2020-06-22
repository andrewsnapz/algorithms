// function merge(intervals) {
//     let sortedArray = intervals.sort((a,b) => a[0] - b[0]);
//     let outputArr = [];
    
//     for (let i = 0; i < sortedArray.length++; i++) {
//         let nextElementExists = true;
//         if (sortedArray[i + 1] === undefined) {
//             nextElementExists = false;
//         } else { 
//             nextElementExists = true;
//         }

//         if (nextElementExists && sortedArray[i][0] <= sortedArray[i + 1][0] && sortedArray[i + 1][1] >= sortedArray[i][1]) {
//             let largestEndTime;
//             if (sortedArray[i][1] >= sortedArray[i + 1][1]) { 
//                 largestEndTime = sortedArray[i][1];
//             } else { 
//                 largestEndTime = sortedArray[i + 1][1];
//             }
//             outputArr.push([sortedArray[i][0], largestEndTime]);

//            } else if (nextElementExists === false) { 
//                return outputArr;
//            } else { 
//                outputArr.push(sortedArray[i]);
//            }
//     }
//     return outputArr;
// }


const merge = intervals => {
    let pointer1 = 0;
    let pointer2 = pointer1 + 1;
    intervals.sort((a,b) => a[0] - b[0]);
    while(pointer2 < intervals.length) {
        if (intervals[pointer2][0] > intervals[pointer1][0] && intervals[pointer2][0] < intervals[pointer1][1] && intervals[pointer2][1] >= intervals[pointer1][1]) {
            intervals.splice(pointer1, 2, [intervals[pointer1][0], intervals[pointer2][1]]);
        } else if (intervals[pointer2][0] > intervals[pointer1][0] && intervals[pointer2][0] < intervals[pointer1][1] && intervals[pointer2][1] < intervals[pointer1][1]) {
            intervals.splice(pointer1, 2, [intervals[pointer1][0], intervals[pointer1][1]]);
        } else if (intervals[pointer2][0] === intervals[pointer1][1]) {
            intervals.splice(pointer1, 2, [intervals[pointer1][0], intervals[pointer2][1]]);
        } else if (intervals[pointer1][0] === intervals[pointer2][0] && intervals[pointer1][1] === intervals[pointer2][1]) {
            intervals.splice(pointer1, 2, [intervals[pointer1][0], intervals[pointer1][1]]);
        } else if (intervals[pointer1][0] === intervals[pointer2][0]) {
            intervals.splice(pointer1, 2, [intervals[pointer1][0], intervals[pointer2][1]]);
        }

        pointer1++;
        pointer2++;
    }
    return intervals;
};




let input = [[1,3], [2,6], [8,10], [15,18]];
// [[1,6], [8,10], [15,18]];

let input2 = [[1,4], [4,5]];

// console.log(merge(input));
// console.log(merge(input2));
// console.log(merge([[1,4],[1,4]]));
// console.log(merge([[1,4],[1,5]]));
console.log(merge([[1,4],[0,4]])) // [[0, 4]];