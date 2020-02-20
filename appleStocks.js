function getMaxProfit(stockPrices) {
    let lowestPrice = stockPrices[0];
    let maxProfit = stockPrices[1] - stockPrices[0];

    for (let i = 1; i < stockPrices.length; i++) {
        let currentValue = stockPrices[i];

        const potentialProfit = currentValue - lowestPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
        lowestPrice = Math.min(lowestPrice, currentValue);
    }
    return maxProfit;
}

const stockPrices = [10, 7, 5, 8, 11, 9];
const crappyDay = [9, 7, 4, 1];

// console.log(getMaxProfit(stockPrices)); //return 6;
// console.log(getMaxProfit(crappyDay)); 

const asyncFunction = () => {
    setTimeout(() => console.log(getMaxProfit(stockPrices)), 1000);
}

const promise = new Promise(asyncFunction)
.then(result => console.log("result"))
.catch(err => console.log(err));

console.log(promise);