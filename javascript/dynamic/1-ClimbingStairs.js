// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

//Current approach: Fibbonaci
//Hint: When the stairs take 4 steps, you are required to do the steps of 3 stairs, which is required to take the steps of 2 stairs and so on.

// const climbStairs = (n) => {
//     var map = new Map()
//     var v
//     for (let i = 1; i <= n; i++) {
//         if (!map.get(i - 2)) {
//             v = i
//         }
//         else {
//             v = map.get(i - 1) + map.get(i - 2)
//         }
//         map.set(i, v)
//     }
//     return v
// }

const climbStairs = n => {
    // Step 1. Create our DP array
    let dp = new Array(n).fill(0);

    // Step 2. Set the initial variables
    dp[0] = 1;
    dp[1] = 2;

    // Step 3. Loop and "Do" the DP logic
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // Step 4. Return last item
    return dp[n - 1];
};

console.log(climbStairs(6))