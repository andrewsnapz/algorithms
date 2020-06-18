const maxProduct = nums => {
    if (nums.length === 1) return nums[0];
    let left = 0;
    let right = nums.length - 1;
    let largestProduct = 0;
    let product = 0;
    while (left < nums.length - 1) {
        console.log("this is the left ", left);
        console.log("this is the right: ", right);
        product = nums[left];
        if (right > left) {
            product = product * nums[right];
            right--;
        }
        if (right === left) {
            if (product > largestProduct) {
                console.log(`this is the product ${product}`);
                largestProduct = product;
                left++;
                right = nums.length - 1;
                product = nums[left];
            } else {
                left++;
                right = nums.length - 1;
                product = nums[left];
            }
        }
    }
    console.log(`the largestProduct: ${largestProduct}`);
    if (nums[0] > largestProduct && nums[nums.length - 1] < nums[0]) return nums[0];
    if (nums[nums.length - 1] > largestProduct && nums[0] < nums[nums.length - 1]) return nums[nums.length - 1];
    return largestProduct;
};
// console.log(maxProduct([2,3,-2,4])); //6
// console.log(maxProduct([-2,0,-1])); //0
// console.log(maxProduct([0,2])); //2
// console.log(maxProduct([3,-1,4])) //4
console.log(maxProduct([-2,3,-4])) //24