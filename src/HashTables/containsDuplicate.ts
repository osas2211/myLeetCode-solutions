
const containsDuplicate = (nums: number[]): boolean=>{

    const cache:any = {}
    for(let i: number = 0; i<nums.length; i++){
        if (cache[nums[i]] !== undefined){
            return true
        }

        else{
            cache[nums[i]] = i
        }
    }

    return false
}

const test = containsDuplicate([1,2,3,4,5,1])
const test2 = containsDuplicate([1,2,3,1])
const test3 = containsDuplicate([1])
const test4 = containsDuplicate([1,1,1,3,3,4,3,2])

console.log(test)
console.log(test2)
console.log(test3)
console.log(test4)