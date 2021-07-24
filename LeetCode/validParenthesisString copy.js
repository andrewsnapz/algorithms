// function checkValidString(s) {
//     let starCount = 0;
//     let arr = [];
    
//     for(let i = 0; i < s.length; i++) {
//         if (s[i] === "(" && starCount === 0) {
//             arr.push(s[i]);
//         } else if (s[i] === "(" && starCount > 0) {
//             starCount--;
//         }
        
//         if (s[i] === "*") {
//             starCount++;
//         }

//         if (s[i] === ")") {
//             if (arr[arr.length - 1] === "(") {
//                 arr.pop();
//             } else if (starCount !== 0) {
//                 starCount--;
//             } else {
//                 return false;
//             }
//         }
//     }

//     let updatedArr = decrementStarCount(arr, starCount);

//     if (updatedArr.length === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

function decrementStarCount(arr, starCount) {
    if (starCount > 0) {
        starCount--;
        arr.pop();
        return decrementStarCount(arr, starCount);
    } 
    return arr;
}



let input1 = "()";
let input2 = "(*)";
let input3 = "(*))";
let input4 = "(*()";
let input5 = "((()))()(())(*()()())**(())()()()()((*()*))((*()*)";


const checkValidString = (s) => {
    const openStack = [];
    const starStack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            openStack.push(i);
        } else if (s[i] === "*") {
            starStack.push(i);
        } else {
            if (openStack.length > 0) {
                openStack.pop();
            } else if (starStack.length > 0) {
                starStack.pop();
            } else {
                return false;
            }
        }
    }

    let i = openStack.length - 1;
    let j = starStack.length - 1;

    while(openStack[i] < starStack[j]) {
        openStack.pop();
        starStack.pop();
        i--;
        j--;
    }

    if (openStack.length === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(checkValidString(input5));