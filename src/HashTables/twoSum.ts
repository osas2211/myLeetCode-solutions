const twoSum = (nums: number[], target: number): number[] | undefined=> {
    let cache:any = {}

    for(let i:number = 0; i<nums.length; i++){
        if(cache[target - nums[i]] !== undefined){
            return [cache[target - nums[i]], i]
        }
        else{
            cache[nums[i]] = i
        }
    }
}

const test = twoSum([3, 8, 11, 25, 98, 2, 0], 100)
console.log(test)