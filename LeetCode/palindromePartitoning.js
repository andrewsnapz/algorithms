function partitoning(s) {
    //have an array to hold all of our answers
    //split the string
    //the longest palindrome is consisted of other palindromes
    let split = s.split('');
    let outterArr = [];
    for (let i = 0; i < split.length; i++) { 
        let pointer = split.length - 1;
        while (i < pointer) { 
            let array = [];
            if (split[i] !== pointer) {
                pointer--;
            } 
            if (split[i] === pointer) {

            }
        }
    }
}

function palindrome(palindromeArr) {
    let innerLeft;
    let innerRight;
    if (palindromeArr.length % 2) {
        innerLeft = (palindrome.length / 2) - 1;
        innerRight = (palindrome.length /2);
    } else {
        innerLeft = Math.floor(palindrome.length / 2);
        innerRight = innerLeft;
    }
    
}