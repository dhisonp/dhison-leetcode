var twoSum = (nums, target) => {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        // console.log(nums[i], i)
        map.set(nums[i], i)
        if (map.has(diff)) {
            console.log(map)
            return [map.get(diff), i]
        }
    }
}

input = [2,7,11,15]
target = 9

console.log((twoSum(input, target)))

// Changelog
// 1/14/21: Updated to use hash map.