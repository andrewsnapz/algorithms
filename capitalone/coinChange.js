// https://leetcode.com/problems/coin-change

// input: int arr, int amount
// output: int
// return the fewest number of coins that you need to make up that amount
// return -1 if no combinations can be made
// infinite number of each coin

const coinChange = (coins, amount) => {
  let memo = new Array(amount + 1).fill(Infinity);
  memo[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        memo[i] = Math.min(memo[i], memo[i - coin] + 1);
      }
    }
  }
  return memo[amount] === Infinity ? -1 : memo[amount];

  // T.C: O(k * N), k = number of coins, N = amount;
  // S.C: O(N);
};

// console.log(coinChange([1, 2, 5], 11)); // 3
console.log(coinChange([2, 3, 5], 11)); // 3
// console.log(coinChange([2], 3)); // -1
// console.log(coinChange([1], 0)); // 0
// console.log(coinChange([1], 1)); // 1
// console.log(coinChange([1], 2)); // 2
