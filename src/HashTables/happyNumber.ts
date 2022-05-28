
const happyNumber = (n: number): boolean=>{

    const getSqrd = (n: number): number=>{
        let sqrd: number = 0
        while (n != 0){
            let digit: number = n % 10
            sqrd += digit*digit
            n = parseInt(`${n / 10}` , 10)
        }
        return sqrd
    }

    const cache: any = {}
    let sqrd: number = getSqrd(n);

    while(sqrd > 1){
        if (cache[sqrd] !== undefined){
            return false
        }
        else {
            cache[sqrd] = sqrd
            sqrd = getSqrd(sqrd)
        }

    }

    return true
}

console.log(happyNumber(23))
