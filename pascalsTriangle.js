const generate = numRows => {
    if (numRows < 0) return [];
    let triangle = [[1]];
    
    while (triangle.length < numRows) {
        let lastTriangleRow = triangle[triangle.length - 1];
        let newRow = [1];
        let pointer1 = 0;
        let pointer2 = pointer1 + 1;

        while (pointer2 < lastTriangleRow.length) {
            newRow.push(lastTriangleRow[pointer1] + lastTriangleRow[pointer2]);
            pointer1++;
            pointer2++;
        }
        newRow.push(1);
        triangle.push(newRow);
    }

    return triangle;
};

// const generate = numRows => {
//     if (!numRows) return [];
//     let triangle = [[1]];

//     while (triangle.length < numRows) {
//         let lastTriangleRow = triangle[triangle.length - 1];
//         let newRow = [1];
//         for (let i = 0; i < lastTriangleRow; i++) {
//             let sum = lastTriangleRow[i] + lastTriangleRow[i + 1];
//             console.log('this is the sum: ', sum)
//             console.log(`value of i: ${lastTriangleRow[i]}, value of i + 1:  ${lastTriangleRow[i + 1]}`);
//             if (!lastTriangleRow[i + 1]) {
//                 newRow.push(1);
//             } else {
//                 newRow.push(sum);
//             }
//         }
//         triangle.push(newRow);
//     }
//     return triangle;
// };

// console.log(generate(2));
console.log(generate(5)); 