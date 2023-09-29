(function(arr1, arr2) {
    var combinedArray = arr1.concat(arr2);
    combinedArray.sort(function(a, b) {
        return a - b;
    });

    var length = combinedArray.length;
    var median;
    if (length % 2 === 0) {
        median = (combinedArray[length / 2 - 1] + combinedArray[length / 2]) / 2;
    } else {
        median = combinedArray[Math.floor(length / 2)];
    }

    console.log("Median:", median);
})([1, 3, 5], [2, 4, 6]);