const myAtoi = (str) => {
  let index = 0;
  let trimStr = str.trim();
  let negative = false;
  let arrStr = trimStr.split("");
  let numArr = [];
  let num;

  if (arrStr[0] === "-") {
    negative = true;
    index = 1;
  } else if (arrStr[0] === "+") {
    index = 1;
  }

  for (let i = index; i < arrStr.length; i++) {
    if (
      typeof parseInt(arrStr[i]) === "number" &&
      !isNaN(parseInt(arrStr[i]))
    ) {
      numArr.push(parseInt(arrStr[i]));
    } else {
      break;
    }
  }

  if (numArr.length === 0) {
    return 0;
  } else if (numArr.length !== 0 && negative === true) {
    num = numArr.join("") * -1;
  } else {
    num = numArr.join("");
  }

  if (num > -2147483648 && num < 2147483648) {
    return num;
  } else if (num <= -2147483648) {
    return -2147483648;
  } else if (num >= 2147483647) {
    return 2147483647;
  }
};

// console.log(myAtoi("42"));
// console.log(myAtoi("    -42   "));
// console.log(myAtoi("4143 with words"));
// console.log(myAtoi("words and 987"));
// console.log(myAtoi("-91283472332"));
console.log(myAtoi("-2147483648"));
