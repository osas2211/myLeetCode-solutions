const singleNumber = (nums: number[]): number =>{

    let cache:any = {}
    for(let i: number = 0; i<nums.length; i++){
        if(cache[nums[i]] === undefined){
            cache[nums[i]] = 0
        }
        else{
            cache[nums[i]]++
        }
    }

    for(let i: number = 0; i<nums.length; i++){
        if (cache[nums[i]] === 0){
            return nums[i]
        }
    }
    

    return -1
}

const test1 = singleNumber([2,2,1])
console.log(test1)