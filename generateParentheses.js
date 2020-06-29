// function generateParentheses(n) {
//     if (!n) return [];
//     let outterArr = [];
//     let left = n;
//     let right = n;
//     return function recursiveParentheses(left, right, parentheses = []) {
//         console.log("i am inside this function")
//         if (right > left && right !== 0) {
//             parentheses.push(')');
//             recursiveParentheses(left, right - 1, parentheses);
//         }
//         if ((left === right && left !== 0) || (left < right && left !== 0)) {
//             parentheses.push('(');
//             recursiveParentheses(left - 1, right, parentheses);
//         }
//         if (left === 0 && right === 0) {
//             outterArr.concat(parentheses);
//             console.log(outterArr);
//         }
//         return outterArr;
//     }
// }

// function generateParentheses(n) {
//     if (!n) return [];
//     let outterArr = [];
//     let left = n;
//     let right = n;
//     return recursiveParentheses(left, right);
// }

// function recursiveParentheses(left, right, parentheses = [], outterArr = []) {
//     if (right > left && right !== 0) {
//         parentheses.push(')');
//         console.log(left)
//         recursiveParentheses(left, right - 1, parentheses);
//     }
//     if ((left === right && left !== 0) || (left < right && left !== 0)) {
//         parentheses.push('(');
//         recursiveParentheses(left - 1, right, parentheses);
//     }
//     if (left === 0 && right === 0) {
//         outterArr.concat(parentheses);
//         console.log(outterArr);
//     }
//     return outterArr;
// }

// console.log(generateParentheses(3));

/* 
if n = 1; what should we get?
[
    "()"
]

if n = 2; what should we get?
[
    "(())",
    "()()"
]

if n = 3; what should we get?
[
    "((()))",
    "(())()",
    "()(())",
    "(()())",
    "()()()"
]
*/

const generateParentheses = n => {
    const output = [];
    
    const dfs = (str, left, right) => {
        if (left > right) return;
        if (left === 0 && right === 0) {
            output.push(str);
            return;
        }
        if (left > 0) {
            dfs(`${str}(`, left - 1, right);
        }
        if (right > 0) {
            dfs(`${str})`, left, right - 1);
        }
    };
    dfs('', n, n);
    return output;
};

console.log(generateParentheses(3));