"use strict";
const isomorphicString = (s, t) => {
    let sCache = {};
    let tCache = {};
    for (let i = 0; i < s.length; i++) {
        sCache[s[i] + "a"] = i;
        tCache[t[i] + "a"] = i;
        if (sCache[s[i] + "a"] !== undefined || tCache[t[i] + "a"] !== undefined) {
            sCache[s[i] + "a"] = i;
            tCache[t[i] + "a"] = i;
        }
    }
    console.log(sCache, tCache);
    if (Object.keys(sCache).length === Object.keys(tCache).length) {
        for (let i = 0; i <= Object.keys(sCache).length; i++) {
            if (sCache[Object.keys(sCache)[i]] !== tCache[Object.keys(tCache)[i]]) {
                return false;
            }
        }
        return true;
    }
    return false;
};
const testCase = isomorphicString("foa", "bar");
console.log(testCase);
const a = [5, 2, 2, 3, 3].sort();
const set1 = new Set([...a, 4]);
console.log(set1);
