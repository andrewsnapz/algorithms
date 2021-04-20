function countPrimes(n) {
  // 1 doesn't count as a prime number
  // divide by 2 if the number is even, if the product has a decimal, it's a prime number
  // divide by 3 if the number is odd, if product has demical, it's a  prime number
  if (n <= 1) return 0;
  let primeCount = 0;

  for (let i = 2; i < n; i++) {
      if (i === 2 || i === 3) {
          primeCount++;
          continue;
      }

      if ( i % 2 === 0 && i % 3 !== 0) primeCount++;
      if (i % 2 !== 0 && i % 3 === 0) primeCount++;
  }
  return primeCount;
}



console.log(countPrimes(10));