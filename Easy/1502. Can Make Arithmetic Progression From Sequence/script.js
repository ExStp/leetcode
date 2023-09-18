// A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

// Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.

var canMakeArithmeticProgression = function (arr) {
    arr.sort((a, b) => a - b);
    const dif = arr[1] - arr[0];
    return arr.every((item, index, arr) => item)
    
};

let arr = [1, 2, 3, 5];
console.log(canMakeArithmeticProgression(arr));
