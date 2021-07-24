function subtractProductAndSum(n) {
    let strNum = n.toString().split('');
    let numArr = [];
    let product = 1;
    let sum = 0;

    for (let i = 0; i < strNum.length; i++) {
        numArr.push(parseInt(strNum[i]))
    }

    for (let i = 0; i < numArr.length; i++) {
        product = product * numArr[i];
        sum = sum + numArr[i];
        console.log("this is product: ", product);
        console.log("this is the sum: ", sum);
    }
    return product - sum;
}

console.log(subtractProductAndSum(234));