"use strict";
const minimumIndexSumOfTwoLists = (list1, list2) => {
    let cache = {};
    let common = {};
    const minIndex = [];
    let min = +Infinity;
    for (let i = 0; i < list1.length; i++) {
        if (cache[list1[i]] !== undefined) {
            cache[list1[i]] += i;
        }
        else {
            cache[list1[i]] = i;
        }
    }
    for (let i = 0; i < list2.length; i++) {
        if (cache[list2[i]] !== undefined) {
            common[list2[i]] = cache[list2[i]] + i;
            min = Math.min(min, common[list2[i]]);
        }
    }
    Object.keys(common).forEach(key => {
        if (common[key] === min) {
            minIndex.push(key);
        }
    });
    return minIndex;
};
const tester = minimumIndexSumOfTwoLists(["biggs", "kada", "mat ice", "filmhouse"], ["kada", "biggs", "filmhouse", "chicken republic"]);
console.log(tester);
