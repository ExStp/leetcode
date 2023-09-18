var arraySign = function (nums) {
    const sign = nums.reduce((acc, item) => acc * item);
    if (sign > 0) return 1;
    else if (sign < 0) return -1;
    else return 0;
};

arr = [1, 5, 0, 2, -3, -4, 14];
console.log(arraySign(arr));
