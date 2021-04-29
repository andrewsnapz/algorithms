function maxProfit(prices) {
  let totalProfit = 0;
  let currProfit = 0;
  let sellPrice;
  let buyPrice;
//   let potentialProfit = sellPrice - buyPrice;

  let buyPriceIdx = 0;
  let sellPriceIdx = 1;

  while (sellPriceIdx < prices.length) {
    if (prices[buyPriceIdx] > prices[sellPriceIdx]) {
      buyPriceIdx++;
      sellPriceIdx++;
    } else if (prices[buyPriceIdx] < prices[sellPriceIdx]) {
      while (sellPriceIdx < prices.length) {
                console.log(`sellPriceIdx: ${sellPriceIdx}`);
        let potentialProfit = sellPrice - buyPrice;
        buyPrice = prices[buyPriceIdx];
        sellPrice = prices[sellPriceIdx];
        if (potentialProfit > currProfit) {
          currProfit = potentialProfit;
        }
        sellPriceIdx++;
      }
    }
    totalProfit = currProfit;
    currProfit = 0;
  }
  console.log('hello');
  return totalProfit;
}

// totalProfit
// currProfit = sellPrice - buyPrice;
// potentialProfit = sellPrice - buyPrice;
// keep track of curr profit and potential profit
// iteriate through arr, find smallest number (buyPrice)
// from the smallest number calc potentialProfit
// if potentialProfit is bigger than currProfit, currProfit = potentialProfit
// once we hit the end of arr, add currProfit to totalProfit
// repeat (find smallest number from arr)

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 7
