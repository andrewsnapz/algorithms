function merge(intervals) {
    let sortedArray = intervals.sort((a,b) => a[0] - b[0]);
    let outputArr = [];
    
    for (let i = 0; i < sortedArray.length++; i++) {
        let nextElementExists = true;
        if (sortedArray[i + 1] === undefined) {
            nextElementExists = false;
        } else { 
            nextElementExists = true;
        }

        if (nextElementExists && sortedArray[i][0] <= sortedArray[i + 1][0] && sortedArray[i + 1][1] >= sortedArray[i][1]) {
            let largestEndTime;
            if (sortedArray[i][1] >= sortedArray[i + 1][1]) { 
                largestEndTime = sortedArray[i][1];
            } else { 
                largestEndTime = sortedArray[i + 1][1];
            }
            outputArr.push([sortedArray[i][0], largestEndTime]);

           } else if (nextElementExists === false) { 
               return outputArr;
           } else { 
               outputArr.push(sortedArray[i]);
           }
    }
    return outputArr;
}

let input = [[1,3], [2,6], [8,10], [15,18]];
// [[1,6], [8, 10], [15, 18]];

console.log(merge(input));

