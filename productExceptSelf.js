// const productExceptSelf = nums => {
//     let productArray = [];
//     for (let i = 0; i < nums.length; i++) {
//         let productToLeft = productToTheLeft(nums.slice(0, i));
//         let productToRight = productToTheRight(nums.slice(i + 1));
//         let finalProduct = productToLeft * productToRight;
//         productArray.push(finalProduct);
//     }    
//     return productArray;
// };

// const productToTheLeft = (arr) => {
//     if (arr.length === 0) {
//         return 1;
//     };

//     let leftProduct = 1;
//     arr.forEach(el => {
//         leftProduct = leftProduct * el;
//     });
//     return leftProduct;
// };

// const productToTheRight = (arr) => {
//     if (arr.length === 0) {
//         return 1;
//     };

//     let rightProduct = 1;
//     arr.forEach(el => {
//         rightProduct = rightProduct * el;
//     });
//     return rightProduct;
// };

let nums1 = [1, 2, 3, 4];


function productExceptSelf(nums) {
    let index = 0;
    let outterArr = [];
    while (index < nums.length) {
        outterArr.push(helper(nums, index));
        index++;
    }
    return outterArr;
}

function helper(nums, index) {
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        if (index === i) {
            continue;
        } else {
            product = product * nums[i];
        }
    }
    return product;
}

console.log(productExceptSelf(nums1)); // [24, 12, 8, 6];