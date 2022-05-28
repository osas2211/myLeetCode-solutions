const intersectionOfTwoArrays = (nums1: number[], nums2: number[]): number[] => {
    let cache:any = {}

    function makeSet (nums: number[]): number[] {
        let setCache: any = {}
        let set: number[] = []
        for (let i: number = 0; i<nums.length; i++){
            if (setCache[nums[i]] !== undefined){
                continue
            }
            else if (setCache[nums[i]] === undefined){
                setCache[nums[i]] = nums[i]
                set.push(nums[i])
            }
        }

        return set
    }
    let arr: number[] = []
    let set: number[];

    for(let i: number = 0; i<nums1.length; i++){
        cache[nums1[i]] = nums1[i]
    }

    for(let i: number = 0; i<nums1.length; i++){
        if(cache[nums2[i]] !== undefined){
            arr.push(cache[nums2[i]])
        }
    }
    set = makeSet(arr)

    return set
}

const test_ = intersectionOfTwoArrays([1,2,2,1], [2,2])
console.log(test_)