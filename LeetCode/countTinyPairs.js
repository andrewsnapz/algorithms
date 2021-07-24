function countTinyPairs(a, b, k) {
    let count = 0;
    let aIdx = 0;
    let bIdx = b.length - 1;

    while (a[aIdx]) {
        let aNum = a[aIdx].toString();
        let bNum = b[bIdx].toString();
        let strNum = aNum + bNum;
        let num = parseInt(strNum);
        if (num < k) {
            count++;
            aIdx++;
            bIdx--
        } else {
            aIdx++;
            bIdx--;
        }
    }
    return count;
}

let a = [1, 2, 3]
let b = [1, 2, 3]
let k = 31

console.log(countTinyPairs(a,b,k));