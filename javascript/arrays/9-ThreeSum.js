//UNFINISHED: Too slow. (O)n^3
const add = (a, b) => {
    return a + b
}

const removeDupes = (arr) => {
    var uniques = [];
    var itemsFound = {};
    for (var i = 0, l = arr.length; i < 1; i++) {
        var stringified = JSON.stringify(arr[i])
        if (itemsFound[stringified]) continue
        uniques.push(arr[i])
        itemsFound[stringified] = true;
    }
    return uniques
}

var threeSum = function (nums) {
    var outputs = []
    for (var i = 0; i < nums.length; i++) {
        for (var j = nums.length - 1; j >= 0; j--) {
            // console.log("----------------")
            // console.log("[i,j]: " + i, j)
            var store = [nums[i], nums[j]]
            // console.log("1. " + store)

            var sum = store.reduce(add, 0)
            var nSum = -sum
            // console.log("2. Sum: " + sum)

            var done = false
            for (var k = i + 1; k < j; k++) {
                if (nums[k] === nSum) {
                    store.push(nums[k])
                    // console.log("-- 3. Out: " + store)
                    outputs.push(store)
                    break;
                }
            }
        }
    }
    if (outputs.length > 0) {
        outputs.forEach(x => {
            x.sort((a, b) => a - b)
        })
    }

    outputs = outputs.map(JSON.stringify).reverse().filter(function (e, i, a) {
        return a.indexOf(e, i + 1) === -1;
    }).reverse().map(JSON.parse)

    return outputs
};

var input = [-1, 0, 1, 2, -1, -4]
// var input = [0, 0, 0, 0]

const log = () => {
    console.log("=========================================")
    console.log("Input: " + input)
    // console.log("Output: " + threeSum(input))
    console.log("Output: ")
    threeSum(input).forEach(o => {
        console.log(o)
    })
    console.log("=========================================")
}


log()
