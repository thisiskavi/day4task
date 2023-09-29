const stringsArray = ["civic", "hello", "level", "world", "madam"];

const isPalindrome = str => {
    const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
};

const palindromeArray = stringsArray.filter(str => isPalindrome(str));

console.log(palindromeArray);