//Basic explanation: To find the minimum amount of coin you need to make x min(x), you can deduct the answer by finding the min amount of coin you need to make x - a coin c, hence min(x-c).
//For example, suppose the coins are 3, 5, and 7 and you need to find the min amount of coin to make 13, min(13). To do that, you can find min(13 - 3), min(13 - 5) or min(13 - 7) and find which has the actual smallest amount. Since each coin's min(x) will add up to 13 anyways, then we know any amount of min(x) we choose, we add by 1 to give us the final answer of min(13). For example, when you know min(10) is 2, min(13) is 2 + 1 since we know we are adding one piece of the 3 coin.
//For min(13 - 3) or min(10) the same concept applies. To find min(10), you can find min(7), min(5) or min(3). Same goes for min(5) and min(3).
//This is what dynamic programming is. In essence, it's using the data we've processed before. In the case of min(10 - 3) or min(10), min(7) and min(5) value already exist by previous iterations, so we just have to pull out both min(5) = 1 and min(3) = 1 and pull out which is the smallest. In this case, both min(5) and min(3) = 1 so we take the value 1. Then, add that value by 1 because we know we're adding ONE piece of either a 3 or 5 coin, so min(10) will obviously be 2. Once we get to min(10), we know that we need to add ONE piece of a 3 coin to add up to 13, hence min(13) = min(10) + min(3) = min(5) + min(5) + min(3) which we know each of them is one because they are the exact amount of a coin value, calculated in the beginning.
//Let that sink in. Lol.

let coinChange = (coins, amount) => {
    if(amount <= 0) return 0 
    let min = Array(amount + 1).fill(Infinity)
    for (let i = 1; i <= amount; i++){
        for(const coin of coins){ //in coins returns c as integer, of coins returns value.
            if(coin === i){
                min[i] = 1
            }
            if(coin < i){
                let previousChange = min[i - coin] //E.g: To find min[10], you need to check min[7]
                min[i] = previousChange < min[i] ? previousChange + 1 : min[i] //The +1 indicates that the current min[x] needs an extra coin to add up to the amount i. For example, min[10] needs an extra coin from min[7], because, well, min[7] is min[7], not min[10]. You need a coin to go from 7 to 10, in this case 3.
            }
        }
    }
    return min[amount] === Infinity ? -1 : min[amount] //Check if dp[amount] is Infinity and return -1 if it is. 
}

const input = [3, 5, 7]
const amount = 13

const output = coinChange(input, amount)
console.log(output)

// --- ToDo ---
// Re-do this problem in either Java or Kotlin.
// This is bottom-up approach. Learn the recursive/top-down approach. Prepare.