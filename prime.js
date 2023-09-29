function isPrime(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true; 

    for (var i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function getPrimeNumbers(numbers) {
    var primeNumbers = [];
    for (var i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            primeNumbers.push(numbers[i]);
        }
    }
    return primeNumbers;
}

var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var primeNumbersArray = getPrimeNumbers(numbersArray);
console.log(primeNumbersArray);