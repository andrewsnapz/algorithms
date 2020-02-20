const firstDuplicate = a => {
    console.time("function run time");
    let smallestDuplicate = -1;
    let smallestDifference = Infinity;
    for (let i = 0; i < a.length; i++) {
        for (let x = i + 1; x < a.length; x++) {
            if (a[i] === a[x]) {
                if (smallestDifference > Math.abs(i - x)) {
                    smallestDifference = Math.abs(i - x);
                    smallestDuplicate = a[i];
                }
            }
        }
    }
    console.timeEnd("function run time");
    return smallestDuplicate;  
}


console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));