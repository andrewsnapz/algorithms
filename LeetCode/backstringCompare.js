const backspaceCompare = (S, T) => {
    let sArr = [];
    let tArr = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '#') {
            sArr.pop();
        } else {
            sArr.push(S[i]);
        }
    }

    for (let i = 0; i < T.length; i++) {
        if (T[i] === '#') {
            tArr.pop();
        } else {
            tArr.push(T[i]);
        }
    }
    if (sArr.join('') === tArr.join('')) {
        return true;
    }
    return false;
}

console.log(backspaceCompare("ab#c", "ad#c"));