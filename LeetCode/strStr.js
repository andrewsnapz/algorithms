const strStr = (haystack, needle) => {
    if (!needle) return 0;
    if (haystack.includes(needle) === true) {
        return haystack.indexOf(needle);
    }
    return -1;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaaa', 'bba'));
