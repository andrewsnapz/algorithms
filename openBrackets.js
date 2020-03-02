function isValid(code) {
    let arrCode = code.split('');
    console.log(arrCode)
    let stack = [];
    for (let i = 0; i < arrCode.length; i++) {
        if (arrCode[i] === "(" || arrCode[i] === "{" || arrCode[i] === "[") {
            stack.push(arrCode[i]);
        } else if (arrCode[i] === ")") {
            if (stack[stack.length - 1] === "(") {
                stack.pop();
            } else {
                return false;
            }
        } else if (arrCode[i] === "}") {
            if (stack[stack.length - 1] === "{") {
                stack.pop();
            } else {
                return false;
            } 
        } else if (arrCode[i] === "]") {
            if (stack[stack.length - 1] === "[")
            stack.pop();
        } else {
            return false;
        } 
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    } 
}

let input = "{[]()}"
console.log(isValid(input));

let input2 = "{[(])}" 
console.log(isValid(input2));