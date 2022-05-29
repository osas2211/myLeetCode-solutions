"use strict";
const twoSum = (nums, target) => {
    let cache = {};
    for (let i = 0; i < nums.length; i++) {
        if (cache[target - nums[i]] !== undefined) {
            return [cache[target - nums[i]], i];
        }
        else {
            cache[nums[i]] = i;
        }
    }
};
const test = twoSum([3, 8, 11, 25, 98, 2, 0], 100);
console.log(test);
