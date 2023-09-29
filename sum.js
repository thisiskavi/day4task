function sumArray(numbers)
{
    var sum = 0;
    for (var i = 0; i< numbers.length; i++)
    {
        sum += numbers[i];
    }
    return sum;
}
var numbersArray = [1, 2, 3, 4, 5, 6];
var totalSum = sumArray(numbersArray);
{
    console.log(totalSum);
}

  