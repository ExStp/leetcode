// 976. Largest Perimeter Triangle
// Easy
// 2.7K
// 383
// Companies

// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

// Example 1:

// Input: nums = [2,1,2]
// Output: 5
// Explanation: You can form a triangle with three side lengths: 1, 2, and 2.

// Example 2:

// Input: nums = [1,2,1,10]
// Output: 0
// Explanation:
// You cannot use the side lengths 1, 1, and 2 to form a triangle.
// You cannot use the side lengths 1, 1, and 10 to form a triangle.
// You cannot use the side lengths 1, 2, and 10 to form a triangle.
// As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.

// Constraints:

//     3 <= nums.length <= 104
//     1 <= nums[i] <= 106

var largestPerimeter = function (numbers) {
    const pairs = [];
    let perimeters = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            for (let k = 0; k < numbers.length; k++) {
                if (i !== j && i !== k && j !== k) {
                    pairs.push([numbers[i], numbers[j], numbers[k]]);
                }
            }
        }
    }
    pairs.forEach((pair) => {
        let [a, b, c] = pair;
        if ((a + b - c) * (b + c - a) * (c + a - b) > 0) {
            let perimeter = a + b + c;
            if (!perimeters.includes(perimeter)) perimeters.push(perimeter);
        }
    });
    perimeters.sort((a, b) => b - a);
    if (perimeters.length === 0) return 0;
    return perimeters[0];
};
console.log(largestPerimeter([3, 6, 2, 3]));
