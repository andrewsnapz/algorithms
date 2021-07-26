// 	https://leetcode.com/problems/fizz-buzz

// input: integer
// output: string array
// divisible by 3 and 5 = "FizzBuzz"
// divisible by 3 = "Fizz"
// divisible by 5 = "Buzz"
// in any other case, i

const fizzBuzz = (n) => {
  if (n < 0) return [].push(n);
  let arr = [];

  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      arr.push("Fizz");
    } else if (i % 3 !== 0 && i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};

console.log(fizzBuzz(3)); // ["1", "2", "Fizz"];
console.log(fizzBuzz(5)); // ["1", "2", "Fizz", "4", "Buzz"];
console.log(fizzBuzz(15)); //["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
