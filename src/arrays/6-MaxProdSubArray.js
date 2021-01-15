// input = [2, 3, -2, 4]
// input = [-2, 3, -4]
// input = [-2]
// input = [0, 2]
input = [3, -1, 4]

var maxProduct = function (nums) {
    var product = 1
    var high = Number.MIN_SAFE_INTEGER
    for (var i = 0; i < nums.length; i++) {
        const value = nums[i]
        if (product === 0) {
            product = 1
        }

        product = product * value
        if (high < product) high = product
    }
    product = 1
    for (var i = nums.length - 1; i > 0; i--) {
        const value = nums[i]
        if (product === 0) {
            product = 1
        }
        product = product * value
        if (high < product) high = product
    }
    return high
}

console.log(maxProduct(input))

//Question: are you allowed to 'test' stuff on the interview? What if you made a mistake? Normally you would notice and fix it right away, but what if you can't notice what's wrong other than the fact that it is incorrect?