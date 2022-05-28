"use strict";
const happyNumber = (n) => {
    const getSqrd = (n) => {
        let sqrd = 0;
        while (n != 0) {
            let digit = n % 10;
            sqrd += digit * digit;
            n = parseInt(`${n / 10}`, 10);
        }
        return sqrd;
    };
    const cache = {};
    let sqrd = getSqrd(n);
    while (sqrd > 1) {
        if (cache[sqrd] !== undefined) {
            return false;
        }
        else {
            cache[sqrd] = sqrd;
            sqrd = getSqrd(sqrd);
        }
    }
    return true;
};
console.log(happyNumber(23));
