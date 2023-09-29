(function(strings) {
    var palindromes = [];

    for (var i = 0; i < strings.length; i++) {
        var str = strings[i].replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        var reversedStr = str.split('').reverse().join('');
        
        if (str === reversedStr) {
            palindromes.push(strings[i]);
        }
    }

    console.log(palindromes);
})(["racecar", "hello", "deified", "world", "madam", "civic"]);