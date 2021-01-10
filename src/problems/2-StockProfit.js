var maxProfit = function(prices) {
    var low, high
    var lowIndex, hiIndex
    var profits = []
    for(var i = 0; i < prices.length; i++) {
        const value = prices[i]
        if(i == 0){
            low = value
            high = value
            lowIndex = i
            hiIndex = i
            continue
        }
        if(value > high){
            high = value
            hiIndex = i
        }
        if(value < low){
            low = value
            lowIndex = i
            high = value
            hiIndex = i
        }
        let profit = high - low
        if(hiIndex > lowIndex){
            profits.push(profit)
        }
    }
    let maxProfit = 0
    profits.forEach((value) => {
        if(value > maxProfit){maxProfit = value}
    })
    if(maxProfit > 0){
        return maxProfit
    }
    return 0
};