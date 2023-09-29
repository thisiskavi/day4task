const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const Prime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

const primeNumbersArray = numbersArray.filter(num => Prime(num));

console.log(primeNumbersArray);