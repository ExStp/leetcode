"use strict";
function countOdd(low, high) {
    let count = 0;
    for (low; low <= high; low++) {
        if (low % 2 === 1)
            count++;
    }
    return count;
}
console.log(countOdd(4, 1));
