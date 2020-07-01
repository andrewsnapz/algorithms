const isPalindrome = s => {
    // ASCII charCodes: 48 - 57 refer to numbers 0-9
    // ASCII charCodes 97 - 122 refer to the lowercase alphabet a-z
    let filtered = s.toLowerCase().split('').filter(char => {
        let charCode = char.charCodeAt();
        return (charCode >=48 && charCode <=57) || (charCode >= 97 && charCode <= 122);
    });
    return filtered.join('') === filtered.reverse().join('');
}

console.log(isPalindrome('race a car')) // false
console.log(isPalindrome("A man, a plan, a canal: Panama")) // true

