const defangIPaddr = (address) => {
  let symbol = "[.]";
  let addressArr = address.split("");
  for (let i = 0; i < addressArr.length; i++) {
    if (addressArr[i] === ".") {
      addressArr.splice(i, 1, symbol);
    }
  }
  return addressArr.join("");
};

console.log(defangIPaddr("1.1.1.1"));
