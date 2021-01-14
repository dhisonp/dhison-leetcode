var maxSubArray = function (nums) {
    var total = 0
    var highest = Number.MIN_SAFE_INTEGER
    for (var c = 0; c < nums.length; c++) {
        total = total + nums[c]
        if (total < nums[c]) total = nums[c]
        if (highest < total) highest = total
    }
    return highest
};
