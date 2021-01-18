let lengthOfLIS = (nums) => {
    let dp = new Array(nums.length).fill(Number.MIN_SAFE_INTEGER)
    dp[0] = 1;
    let maxCount = 1
    let lastHi = nums[0]
    for (let i = 1; i <= nums.length - 1; i++) {
        console.log("------------- " + i + ", " + nums[i])
        //Greater than last value
        if (nums[i] > nums[i - 1]) {
            // dp[i] = dp[i - 1] + 1
            dp[i] = maxCount + 1
            // lastHi = lastHi < nums[i] ? nums[i] : lastHi
            lastHi = nums[i]
        }
        //Less than last value
        if (nums[i] < lastHi) {
            // dp[i] = Math.min(maxCount, dp[i - 1])
            dp[i] = 1
        }
        maxCount = dp[i] > maxCount ? dp[i] : maxCount

        console.log("dpi lastHi maxCount")
        console.log(dp[i], lastHi, maxCount)
    }
    return maxCount
}


// const input = [10, 9, 2, 5, 3, 7, 101, 18]  //Output = 4
//    dp[i] = [1, start 1, 1, 2, 2, 3,   4,  4]
//   lastHi = [10,     10,10, 5, 5, 7, 101,101]
// maxCount = [1,       1, 1, 2, 2, 3,   4,  4]
//Concept similar to Coin Change: look at your previous element's value.

const input = [4, 10, 4, 3, 8, 9] //Output = 3

console.log(lengthOfLIS(input))