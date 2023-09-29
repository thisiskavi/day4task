(function(arr, k) {
    var rotateArray = function(arr) {
        var temp = arr.shift(); 
        arr.push(temp);
    };

    for (var i = 0; i < k; i++) {
        rotateArray(arr);
    }

    console.log(arr);
})([1, 2, 3, 4, 5, 6, 7], 2);